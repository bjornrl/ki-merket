import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function StickerUploader() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [stickerColor, setStickerColor] = useState<"black" | "white">("black");
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

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setImage(result);
      setResult(null);
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

  const handleSticker = () => {
    if (!image) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const baseImg = new Image();
    baseImg.src = image;
    baseImg.onload = () => {
      canvas.width = baseImg.width;
      canvas.height = baseImg.height;
      ctx.drawImage(baseImg, 0, 0);

      const sticker = new Image();
      sticker.src =
        stickerColor === "white" ? "/Ki-merket-hvit.png" : "/Ki-merket.png";
      sticker.onload = () => {
        const stickerWidth = baseImg.width * 0.25;
        const stickerHeight = (sticker.height / sticker.width) * stickerWidth;
        ctx.drawImage(
          sticker,
          baseImg.width - stickerWidth - 10,
          baseImg.height - stickerHeight - 10,
          stickerWidth,
          stickerHeight
        );
        setResult(canvas.toDataURL("image/png"));
      };
    };
  };

  const handleDownload = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result;
    a.download = "stickered-image.png";
    a.click();
  };

  return (
    <div className="p-4 w-3xl mx-auto">
      <Card>
        <CardContent className="space-y-4">
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="w-full h-40 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            Drag & drop an image here or click to upload
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            ref={fileInputRef}
            className="hidden"
          />

          <div className="flex gap-4">
            <Button
              variant="secondary"
              onClick={() => setStickerColor("black")}
            >
              Svart merke
            </Button>
            <Button
              variant="secondary"
              onClick={() => setStickerColor("white")}
            >
              Hvitt merke
            </Button>
          </div>

          {image && (
            <img src={image} alt="Uploaded" className="max-w-full h-auto" />
          )}

          <Button variant="secondary" onClick={handleSticker} disabled={!image}>
            Se resultat
          </Button>

          {result && (
            <>
              <p className="mt-4 font-bold">Result:</p>
              <img src={result} alt="With Sticker" className="max-w-full" />
              <Button
                variant="secondary"
                onClick={handleDownload}
                className="mt-2"
              >
                Last ned bilde
              </Button>
            </>
          )}

          <canvas ref={previewCanvasRef} className="hidden"></canvas>
        </CardContent>
      </Card>
    </div>
  );
}
