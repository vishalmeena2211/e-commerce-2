import React from 'react';

const ReviewPage = ({ reviews }) => {
  return (
    <div id="app" className="antialiased bg-gray-100 min-h-screen pt-8 pb-12">
      <div className="px-4 sm:px-6 lg:px-8">
        {reviews.map((review) => (
          <div key={review.id} className="max-w-lg px-8 py-8 rounded-md shadow-lg bg-white">
            <div className="flex space-x-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i <= review.rating ? 'text-yellow-300' : 'text-gray-300'
                  }`}
                  fill={i <= review.rating ? 'currentColor' : 'none'}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              ))}
            </div>
            <p className="mt-2 text-sm font-medium leading-5 text-gray-500">
              {review.date}
            </p>
            <div className="mt-6 flex items-center space-x-1">
              <p className="text-sm font-medium leading-5 capitalize text-gray-500">
                Color: {review.color}
              </p>
              <span className="text-gray-500">&bull;</span>
              {review.verifiedPurchase && (
                <p className="text-sm font-medium leading-5 text-gray-500">
                  Verified purchase
                </p>
              )}
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-800">{review.title}</h3>
              <p className="text-sm font-medium leading-5 text-gray-600">
                {review.body}
              </p>
            </div>
            <div className="mt-6 flex items-center space-x-2">
              <div className="flex flex-shrink-0 rounded-full border border-gray-200">
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  src={review.photo}
                  alt=""
                />
              </div>
              <span className="text-sm font-semibold leading-5 text-gray-900">
                {review.name}
              </span>
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
        <p className="mt-6 font-medium text-gray-500">
          Design by
          <a
            href="https://twitter.com/Ildiesign"
            rel="noreferrer noopener"
            target="_blank"
            className="underline hover:text-gray-600"
          >
            Ildiko Gaspar
          </a>
          , Founder of
          <br className="sm:hidden" />
          <a
            href="https://uidesigndaily.com/posts/sketch-help-center-accordion-list-panel-cards-search-day-1088"
            rel="noreferrer noopener"
            target="_blank"
            className="underline hover:text-gray-600"
          >
            UI Design Daily
          </a>
        </p>
      </div>
    </div>
  );
};

export default ReviewPage;
