import { useInView } from 'react-intersection-observer';

const useProjectInView = (threshold = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false, // Ensure animations trigger every time the element comes into view
  });
  return { ref, inView };
};

export default useProjectInView;
