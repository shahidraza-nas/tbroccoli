"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  value?: string[];
  onChange: (urls: string[]) => void;
  maxImages?: number;
}

export function ImageUpload({
  value = [],
  onChange,
  maxImages = 5,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length === 0) return;

    if (value.length + files.length > maxImages) {
      setError(`Maximum ${maxImages} images allowed`);
      return;
    }

    setUploading(true);
    setError(null);

    try {
      // Simulate image upload - Replace with actual upload to your storage
      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          // Read file as data URL (for demo purposes)
          return new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              resolve(reader.result as string);
            };
            reader.readAsDataURL(file);
          });
        })
      );

      onChange([...value, ...uploadedUrls]);
    } catch (err) {
      setError("Failed to upload images");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemove = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading || value.length >= maxImages}
        >
          {uploading ? "Uploading..." : "Upload Images"}
        </Button>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {value.length} / {maxImages} images
        </span>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}

      {value.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {value.map((url, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800"
            >
              <img
                src={url}
                alt={`Product image ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute right-2 top-2 rounded-full bg-red-600 p-1 text-white opacity-0 transition-opacity hover:bg-red-700 group-hover:opacity-100"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Supported formats: JPG, PNG, GIF. Max file size: 5MB per image.
      </p>
    </div>
  );
}
