import React from "react";
import Modal from "react-modal";
import Button from "./Button";

Modal.setAppElement("#root");

interface CartModelProps {
  isModalOpened: boolean;
  setIsModalOpened: (isModalOpened: boolean) => void;
  isLoading: boolean;
  setAddress: (newAddress: string) => void;
  pay: () => void;
}

const CartModal: React.FC<CartModelProps> = (props) => {
  return (
    <Modal
      isOpen={props.isModalOpened}
      onRequestClose={() => props.setIsModalOpened(false)}
      contentLabel='Example Modal'
      className='modal'
    >
      <div className='modal-container'>
        <h2>Checkout</h2>
        {!props.isLoading ? (
          <div>
            <form action=''>
              <input
                placeholder='Shipment address'
                onChange={(event) => {
                  props.setAddress(event.target.value);
                }}
              />
            </form>
            <div className='btn-group'>
              <Button
                handleClick={() => {
                  props.pay();
                }}
              >
                Pay
              </Button>
              <Button
                handleClick={() => {
                  props.setIsModalOpened(false);
                }}
                color='#000'
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Modal>
  );
};

export default CartModal;
