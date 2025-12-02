"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { bulkDeleteProducts, bulkUpdateProductStatus } from "@/actions/product-bulk.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface BulkActionsBarProps {
  selectedIds: string[];
  onClearSelection: () => void;
}

export function BulkActionsBar({
  selectedIds,
  onClearSelection,
}: BulkActionsBarProps) {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (selectedIds.length === 0) return null;

  const handleBulkDelete = async () => {
    setIsProcessing(true);
    setError(null);

    const result = await bulkDeleteProducts(selectedIds);

    if (result.success) {
      setShowDeleteDialog(false);
      onClearSelection();
      router.refresh();
    } else {
      setError(result.error || "Failed to delete products");
    }

    setIsProcessing(false);
  };

  const handleBulkActivate = async () => {
    setIsProcessing(true);
    setError(null);

    const result = await bulkUpdateProductStatus(selectedIds, true);

    if (result.success) {
      onClearSelection();
      router.refresh();
    } else {
      setError(result.error || "Failed to activate products");
    }

    setIsProcessing(false);
  };

  const handleBulkDeactivate = async () => {
    setIsProcessing(true);
    setError(null);

    const result = await bulkUpdateProductStatus(selectedIds, false);

    if (result.success) {
      onClearSelection();
      router.refresh();
    } else {
      setError(result.error || "Failed to deactivate products");
    }

    setIsProcessing(false);
  };

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {selectedIds.length} product{selectedIds.length !== 1 ? "s" : ""} selected
          </span>
          <button
            onClick={onClearSelection}
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Clear selection
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleBulkActivate}
            disabled={isProcessing}
          >
            Activate
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleBulkDeactivate}
            disabled={isProcessing}
          >
            Deactivate
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => setShowDeleteDialog(true)}
            disabled={isProcessing}
          >
            Delete
          </Button>
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
          {error}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogHeader>
          <DialogTitle>Delete {selectedIds.length} Products</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete {selectedIds.length} selected product
            {selectedIds.length !== 1 ? "s" : ""}? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-6">
          <Button
            variant="outline"
            onClick={() => setShowDeleteDialog(false)}
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleBulkDelete}
            disabled={isProcessing}
          >
            {isProcessing ? "Deleting..." : "Delete Products"}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
