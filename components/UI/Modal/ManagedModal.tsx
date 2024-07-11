import SearchPlacesModal from '@/components/Reusable/Modals/SearchPlacesModal';
import { MODAL_VIEWS, useUIAction, useUIState } from '@/contexts/ui.context';
import CustomModal from './Modal';

function renderModal(view: MODAL_VIEWS, data?: any) {
  switch (view) {
    case 'SEARCH_PLACES':
      return <SearchPlacesModal />;
    // case 'ABUSE_REPORT':
    //   return <AbuseReport data={data} />;
    default:
      return null;
  }
}

const ManagedModal = () => {
  const { displayModal, modalView, modalData } = useUIState();
  const { closeModal } = useUIAction();

  return (
    <CustomModal open={displayModal} onClose={closeModal}>
      {renderModal(modalView, modalData)}
    </CustomModal>
  );
};

export default ManagedModal;
