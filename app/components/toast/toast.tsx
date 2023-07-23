import { Flip, toast, ToastContainer, type ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastProps {
  // 코드 리뷰 -> type은 enum으로 따로 빼기
  type: 'success' | 'error' | 'info' | 'action'
  message?: string
}

const toastOptions: ToastOptions = {
  position: 'bottom-left',
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  closeButton: false
}

export function showToast ({ type, message }: ToastProps) {
  switch (type) {
    case 'success':
      // enum으로 타입 지정했을 때 가독성 상승 -> case ToastType.success:
      toast.success(message ?? '시간표 로딩에 성공했어요!', {
        ...toastOptions
      })
      return
    case 'error':
      toast.error(message ?? '일치하는 학번이 없어요', {
        ...toastOptions
      })
      return

    case 'info':
      toast.info(message ?? '정보에요', {
        ...toastOptions
      })

    // ... 생략
  }
}

export const Toast: React.FC = () => {
  return <ToastContainer newestOnTop={true} transition={Flip} />
}
