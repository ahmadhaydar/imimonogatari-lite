import { css } from "@emotion/react";
import React from "react";
import { Button } from "src/components/Button";
import { Modal } from "src/components/Modal";

export const DeleteAnimeModal = ({
  open, onOpenChange, onDelete,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => void;
}) => {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Delete Anime"
      description="Are you sure you want to remove this anime from this collection?"
    >
      <div
        css={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "0.5rem",
        })}
      >
        <Button
          size="md"
          colorScheme="primary"
          onClick={() => {
            onOpenChange(false);
            onDelete();
          }}
        >
          Delete
        </Button>
        <Button
          size="md"
          colorScheme="primary"
          variant="ghost"
          onClick={() => onOpenChange(false)}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};
