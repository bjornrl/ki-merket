import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function StickerUploader() {
  const [image, setImage] = useState<string | null>(null);
  const [stickerColor, setStickerColor] = useState<"black" | "white">("black");
  const [stickerSizePercent, setStickerSizePercent] = useState<number>(25); // percentage of image width
  const [stickerOpacityPercent, setStickerOpacityPercent] =
    useState<number>(100); // 45 - 100
  const [stickerXPercent, setStickerXPercent] = useState<number>(100); // 0-100 from left
  const [stickerYPercent, setStickerYPercent] = useState<number>(100); // 0-100 from top
  const [generationType, setGenerationType] = useState<"fully" | "partially">("fully");
  const [partialDescription, setPartialDescription] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const renderIdRef = useRef(0);

  const recommendStickerColor = () => {
    if (!image || !previewCanvasRef.current) return;

    const img = new Image();
    img.src = image;
    img.onload = () => {
      const canvas = previewCanvasRef.current!;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let totalLuminance = 0;
      for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        totalLuminance += luminance;
      }
      const avgLuminance = totalLuminance / (imageData.data.length / 4);
      setStickerColor(avgLuminance > 127 ? "black" : "white");
    };
  };

  const getPointerPosOnCanvas = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const handleCanvasDown = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!image) return;
    e.preventDefault();
    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    const baseImg = new Image();
    baseImg.src = image;
    baseImg.onload = () => {
      const sticker = new Image();
      sticker.src =
        generationType === "partially"
          ? stickerColor === "white"
            ? "/merke/delvis-generert-hvit.png"
            : "/merke/delvis-generert.png"
          : stickerColor === "white"
            ? "/merke/Ki-merket-hvit.png"
            : "/merke/Ki-merket.png";
      sticker.onload = () => {
        const stickerWidth = baseImg.width * (stickerSizePercent / 100);
        const stickerHeight = (sticker.height / sticker.width) * stickerWidth;
        const margin = 0.05;
        const minX = baseImg.width * margin;
        const minY = baseImg.height * margin;
        const maxX = baseImg.width - stickerWidth - baseImg.width * margin;
        const maxY = baseImg.height - stickerHeight - baseImg.height * margin;
        const rangeX = Math.max(0, maxX - minX);
        const rangeY = Math.max(0, maxY - minY);
        const currentX = minX + (stickerXPercent / 100) * rangeX;
        const currentY = minY + (stickerYPercent / 100) * rangeY;

        const p = getPointerPosOnCanvas(e);
        const withinX = p.x >= currentX && p.x <= currentX + stickerWidth;
        const withinY = p.y >= currentY && p.y <= currentY + stickerHeight;
        if (withinX && withinY) {
          dragOffsetRef.current = { x: p.x - currentX, y: p.y - currentY };
          setIsDragging(true);
        }
      };
    };
  };

  const handleCanvasMove = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!isDragging || !image) return;
    e.preventDefault();
    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    const baseImg = new Image();
    baseImg.src = image;
    baseImg.onload = () => {
      const sticker = new Image();
      sticker.src =
        generationType === "partially"
          ? stickerColor === "white"
            ? "/merke/delvis-generert-hvit.png"
            : "/merke/delvis-generert.png"
          : stickerColor === "white"
            ? "/merke/Ki-merket-hvit.png"
            : "/merke/Ki-merket.png";
      sticker.onload = () => {
        const stickerWidth = baseImg.width * (stickerSizePercent / 100);
        const stickerHeight = (sticker.height / sticker.width) * stickerWidth;
        const margin = 0.05;
        const minX = baseImg.width * margin;
        const minY = baseImg.height * margin;
        const maxX = baseImg.width - stickerWidth - baseImg.width * margin;
        const maxY = baseImg.height - stickerHeight - baseImg.height * margin;
        const rangeX = Math.max(0, maxX - minX);
        const rangeY = Math.max(0, maxY - minY);

        const p = getPointerPosOnCanvas(e);
        let newX = p.x - dragOffsetRef.current.x;
        let newY = p.y - dragOffsetRef.current.y;
        newX = Math.max(minX, Math.min(maxX, newX));
        newY = Math.max(minY, Math.min(maxY, newY));

        setStickerXPercent(rangeX > 0 ? ((newX - minX) / rangeX) * 100 : 0);
        setStickerYPercent(rangeY > 0 ? ((newY - minY) / rangeY) * 100 : 0);
      };
    };
  };

  const handleCanvasUp = () => {
    if (isDragging) setIsDragging(false);
  };

  const renderSticker = () => {
    if (!image) return;

    const canvas = previewCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderId = ++renderIdRef.current;

    const baseImg = new Image();
    baseImg.src = image;
    baseImg.onload = () => {
      if (renderId !== renderIdRef.current) return;
      canvas.width = baseImg.width;
      canvas.height = baseImg.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseImg, 0, 0);

      const sticker = new Image();
      sticker.src =
        generationType === "partially"
          ? stickerColor === "white"
            ? "/merke/delvis-generert-hvit.png"
            : "/merke/delvis-generert.png"
          : stickerColor === "white"
            ? "/merke/Ki-merket-hvit.png"
            : "/merke/Ki-merket.png";
      sticker.onload = () => {
        if (renderId !== renderIdRef.current) return;
        const stickerWidth = baseImg.width * (stickerSizePercent / 100);
        const stickerHeight = (sticker.height / sticker.width) * stickerWidth;
        const previousAlpha = ctx.globalAlpha;
        ctx.globalAlpha = Math.max(
          0.45,
          Math.min(1, stickerOpacityPercent / 100)
        );
        const margin = 0.05;
        const minX = baseImg.width * margin;
        const minY = baseImg.height * margin;
        const maxX = baseImg.width - stickerWidth - baseImg.width * margin;
        const maxY = baseImg.height - stickerHeight - baseImg.height * margin;
        const rangeX = Math.max(0, maxX - minX);
        const rangeY = Math.max(0, maxY - minY);
        const drawX = minX + (stickerXPercent / 100) * rangeX;
        const drawY = minY + (stickerYPercent / 100) * rangeY;

        ctx.drawImage(sticker, drawX, drawY, stickerWidth, stickerHeight);

        if (generationType === "partially" && partialDescription.trim()) {
          const padding = stickerHeight * 0.08;
          const fontSize = Math.max(10, stickerWidth * 0.12);
          const lineHeight = fontSize * 1.2;
          const maxCharsPerLine = 20;
          const raw = partialDescription.trim();
          const lines: string[] = [];
          for (let i = 0; i < raw.length; i += maxCharsPerLine) {
            lines.push(raw.slice(i, i + maxCharsPerLine));
          }
          ctx.font = `${fontSize}px sans-serif`;
          ctx.textAlign = "center";
          ctx.fillStyle = stickerColor === "black" ? "#111" : "#fff";
          const textX = drawX + stickerWidth / 2;
          let textY = drawY + stickerHeight + padding + fontSize;
          for (const line of lines) {
            ctx.fillText(line, textX, textY);
            textY += lineHeight;
          }
        }

        ctx.globalAlpha = previousAlpha;
      };
    };
  };

  useEffect(() => {
    if (!image) return;
    renderSticker();
  }, [
    image,
    stickerColor,
    stickerSizePercent,
    stickerOpacityPercent,
    stickerXPercent,
    stickerYPercent,
    generationType,
    partialDescription,
  ]);

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setImage(result);
      setTimeout(() => recommendStickerColor(), 0);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  // const [files, setFiles] = useState<File[]>([]);
  // const handleFileUpload = (files: File[]) => {
  //   setFiles(files);
  //   console.log(files);
  // };

  // const handleSticker = () => {
  //   renderSticker();
  // };

  const handleDownload = () => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "stickered-image.png";
    a.click();
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <Card>
        <CardContent className="space-y-4">
          {!image && (
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="w-full p-4 h-40 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              Dra og slipp ett bilde inn i boksen, eller trykk for å laste opp.
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            ref={fileInputRef}
            className="hidden"
          />

          {image && (
            <div className="flex flex-row justify-between gap-4">
              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  className="border focus:border-blue-500 border-transparent hover:cursor-pointer hover:border-blue-500 hover:text-blue-500"
                  onClick={() => setStickerColor("black")}
                >
                  Svart merke
                </Button>
                <Button
                  variant="secondary"
                  className="border focus:border-blue-500 border-transparent hover:cursor-pointer hover:border-blue-500 hover:text-blue-500"
                  onClick={() => setStickerColor("white")}
                >
                  Hvitt merke
                </Button>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="sticker-size"
                    className="text-sm text-gray-700"
                  >
                    Størrelse: {stickerSizePercent}%
                  </label>
                  <input
                    id="sticker-size"
                    type="range"
                    min={15}
                    max={50}
                    step={1}
                    value={stickerSizePercent}
                    onChange={(e) =>
                      setStickerSizePercent(Number(e.target.value))
                    }
                    className="h-2 w-40 cursor-pointer appearance-none rounded bg-gray-200 accent-black"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="sticker-opacity"
                    className="text-sm text-gray-700"
                  >
                    Opasitet: {stickerOpacityPercent}%
                  </label>
                  <input
                    id="sticker-opacity"
                    type="range"
                    min={45}
                    max={100}
                    step={1}
                    value={stickerOpacityPercent}
                    onChange={(e) =>
                      setStickerOpacityPercent(Number(e.target.value))
                    }
                    className="h-2 w-40 cursor-pointer appearance-none rounded bg-gray-200 accent-black"
                  />
                </div>
                <div className="flex items-center gap-3 border-l pl-4">
                  <span className="text-sm text-gray-700">Generert:</span>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="generation-type"
                      checked={generationType === "fully"}
                      onChange={() => setGenerationType("fully")}
                      className="accent-black"
                    />
                    <span className="text-sm">Helt generert</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="generation-type"
                      checked={generationType === "partially"}
                      onChange={() => setGenerationType("partially")}
                      className="accent-black"
                    />
                    <span className="text-sm">Delvis generert</span>
                  </label>
                </div>
              </div>
              {generationType === "partially" && (
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="partial-description"
                    className="text-sm text-gray-700"
                  >
                    Beskriv hva som er generert/redigert (vises under merket)
                  </label>
                  <input
                    id="partial-description"
                    type="text"
                    value={partialDescription}
                    onChange={(e) => setPartialDescription(e.target.value)}
                    placeholder="F.eks. Himmel og bakgrunn generert med KI"
                    className="w-full max-w-md px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              )}
              {/* <Button
                className="bg-gray-700 hover:bg-gray-800 text-white border border-transparent hover:cursor-pointer hover:border-green-500 hover:text-green-500"
                variant={"secondary"}
                onClick={handleSticker}
                disabled={!image}
              >
                Se resultat
              </Button> */}
            </div>
          )}

          <div className="flex flex-row gap-4 justify-center">
            {image && (
              <Card>
                <CardContent className="p-4">
                  <CardHeader>
                    <strong>Resultat</strong>
                  </CardHeader>
                  <p>
                    Merket kan dras til der du synes det passer best på bildet.
                  </p>
                  <br />
                  <canvas
                    ref={previewCanvasRef}
                    className="max-h-[300px] max-w-[780px] h-auto w-auto mx-auto block touch-none"
                    onMouseDown={(e) => handleCanvasDown(e)}
                    onMouseMove={(e) => handleCanvasMove(e)}
                    onMouseUp={handleCanvasUp}
                    onMouseLeave={handleCanvasUp}
                    onTouchStart={(e) => handleCanvasDown(e)}
                    onTouchMove={(e) => handleCanvasMove(e)}
                    onTouchEnd={handleCanvasUp}
                  ></canvas>
                </CardContent>
              </Card>
            )}
          </div>
          {image && (
            <Button
              className="bg-blue-700 text-white border border-transparent hover:border-black hover:cursor-pointer"
              variant="ghost"
              onClick={handleDownload}
            >
              Last ned merket bilde
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
