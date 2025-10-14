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
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

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
        stickerColor === "white" ? "/Ki-merket-hvit.png" : "/Ki-merket.png";
      sticker.onload = () => {
        const stickerWidth = baseImg.width * (stickerSizePercent / 100);
        const stickerHeight = (sticker.height / sticker.width) * stickerWidth;
        const maxX = baseImg.width - stickerWidth;
        const maxY = baseImg.height - stickerHeight;
        const currentX = Math.max(
          0,
          Math.min(maxX, (stickerXPercent / 100) * maxX)
        );
        const currentY = Math.max(
          0,
          Math.min(maxY, (stickerYPercent / 100) * maxY)
        );

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
        stickerColor === "white" ? "/Ki-merket-hvit.png" : "/Ki-merket.png";
      sticker.onload = () => {
        const stickerWidth = baseImg.width * (stickerSizePercent / 100);
        const stickerHeight = (sticker.height / sticker.width) * stickerWidth;
        const maxX = baseImg.width - stickerWidth;
        const maxY = baseImg.height - stickerHeight;

        const p = getPointerPosOnCanvas(e);
        let newX = p.x - dragOffsetRef.current.x;
        let newY = p.y - dragOffsetRef.current.y;
        newX = Math.max(0, Math.min(maxX, newX));
        newY = Math.max(0, Math.min(maxY, newY));

        setStickerXPercent((newX / maxX) * 100);
        setStickerYPercent((newY / maxY) * 100);
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

    const baseImg = new Image();
    baseImg.src = image;
    baseImg.onload = () => {
      canvas.width = baseImg.width;
      canvas.height = baseImg.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseImg, 0, 0);

      const sticker = new Image();
      sticker.src =
        stickerColor === "white" ? "/Ki-merket-hvit.png" : "/Ki-merket.png";
      sticker.onload = () => {
        const stickerWidth = baseImg.width * (stickerSizePercent / 100);
        const stickerHeight = (sticker.height / sticker.width) * stickerWidth;
        const previousAlpha = ctx.globalAlpha;
        ctx.globalAlpha = Math.max(
          0.45,
          Math.min(1, stickerOpacityPercent / 100)
        );
        const maxX = baseImg.width - stickerWidth;
        const maxY = baseImg.height - stickerHeight;
        const drawX = Math.max(
          0,
          Math.min(maxX, (stickerXPercent / 100) * maxX)
        );
        const drawY = Math.max(
          0,
          Math.min(maxY, (stickerYPercent / 100) * maxY)
        );

        ctx.drawImage(sticker, drawX, drawY, stickerWidth, stickerHeight);
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
              </div>
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
