import React from "react";
import {
  DefaultButton,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogType,
} from "@fluentui/react";

interface IFormModalProps {
  children: JSX.Element;
  hidden: boolean;
  title?: string;
  processing: boolean;
  onConfirm(ev?: any): void;
  onCancel(ev?: any): void;
}

export const FormModal: React.FC<IFormModalProps> = ({
  children,
  hidden,
  title,
  processing,
  onCancel,
  onConfirm,
}) => (
  <Dialog
    minWidth={600}
    hidden={hidden}
    onDismiss={onCancel}
    dialogContentProps={{
      type: DialogType.normal,
      title: title,
    }}
    modalProps={{
      isBlocking: true,
    }}
    styles={{ main: { borderRadius: 15 } }}
  >
    <DialogContent>{children}</DialogContent>
    <DialogFooter styles={{ actionsRight: {} }}>
      <DefaultButton
        disabled={processing}
        onClick={onCancel}
        text={"Vazgeç"}
        styles={{
          root: {
            color: "#744bfc",
            backgroundColor: "#F5F7FF",
            border: "none",
            borderRadius: 20,
          },
          rootHovered: {
            color: "#744bfc",
            backgroundColor: "#F5F7FF",
            border: "none",
            borderRadius: 20,
          },
        }}
      />

      <DefaultButton
        disabled={processing}
        onClick={onConfirm}
        text={"Kaydet"}
        styles={{
          root: {
            color: "#F5F7FF",
            backgroundColor: "#744bfc",
            border: "none",
            borderRadius: 20,
          },
          rootHovered: {
            color: "#ffffff",
            backgroundColor: "#744bfc",
            border: "none",
            borderRadius: 20,
          },
        }}
      />
    </DialogFooter>
  </Dialog>
);
