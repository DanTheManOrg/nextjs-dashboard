import { notFound } from 'next/navigation';
import ErrorButton from './error-button';

export default function ReviewsDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <>
      <h1>
        Details about product {params.productId} with review {params.reviewId}
      </h1>
      <ErrorButton />
    </>
  );
}
