import toast from 'react-hot-toast';

function SuccessToast(message: string, duration?: number) {
  return toast.success(
    message?.length > 0 ? message : 'Sorry! something went wrong. code 420',
    {
      style: {
        backgroundColor: 'var(--color-gray2)',
        color: 'white',
      },
      duration: duration || 4000,
    }
  );
}
export default SuccessToast;
