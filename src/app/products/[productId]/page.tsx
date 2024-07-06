import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

/**
 * Next.js function keyword to generate dynamic metadata. Promise is used to simulate a fetch taking 100ms then updating the title.
 * Title will appear as "iphone 100" when url is /products/100
 */
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>;
}
