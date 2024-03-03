import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: 'Trust Medical Service',
  siteName: 'Trust Medical Service',
  description:
    'Landing page Trust Medical Services',
  url: 'https://trustmedicalservicebd.com',
  type: 'website',
  robots: 'follow, index',
  image: '',
  author: 'IM'
};

/**

 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = () => {
  
  return (
    <Head>
    </Head>
  );
};


export default SeoHead;