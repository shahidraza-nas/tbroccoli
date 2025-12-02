"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/actions/product.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface DeleteProductDialogProps {
  productId: string;
  productName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteProductDialog({
  productId,
  productName,
  open,
  onOpenChange,
}: DeleteProductDialogProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);

    const result = await deleteProduct(productId);

    if (result.success) {
      onOpenChange(false);
      router.refresh();
    } else {
      setError(result.error || "Failed to delete product");
    }

    setIsDeleting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle>Delete Product</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete <strong>{productName}</strong>? This
          action cannot be undone.
        </DialogDescription>
      </DialogHeader>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
          {error}
        </div>
      )}

      <DialogFooter className="mt-6">
        <Button
          variant="outline"
          onClick={() => onOpenChange(false)}
          disabled={isDeleting}
        >
          Cancel
        </Button>
        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete Product"}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
