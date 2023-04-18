import { BooleanLiteral } from "typescript";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal