import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Category = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);
};

export default Category;
