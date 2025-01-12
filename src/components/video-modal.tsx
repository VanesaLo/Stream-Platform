"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface VideoModalProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ videoId, isOpen, onClose }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle />
      <DialogContent className="sm:max-w-[800px]">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
