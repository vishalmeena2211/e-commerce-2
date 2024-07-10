import React from 'react'

const SingleProduct = () => {
  return (
    <div>
      <div class="bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
                    <img class="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product"/>
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-green-500 text-white py-2 px-4 rounded-full font-bold hover:bg-green-600">Add to Cart</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-100 text-green-500 py-2 border border-green-500 px-4 rounded-full font-bold hover:bg-gray-300">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold mb-2">Product Name</h2>
                <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700">Price:</span>
                        <span class="text-green-600">$29.99</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700">Availability:</span>
                        <span class="text-gray-600">In Stock</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700">Select Color:</span>
                    <div class="flex items-center mt-2">
                        <button class="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700">Select Size:</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 transition-all duration-3s hover:bg-green-500 hover:text-white">S</button>
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 transition-all duration-3s hover:bg-green-500 hover:text-white">M</button>
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 transition-all duration-3s hover:bg-green-500 hover:text-white">L</button>
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 transition-all duration-3s hover:bg-green-500 hover:text-white">XL</button>
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 transition-all duration-3s hover:bg-green-500 hover:text-white">XXL</button>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-gray-700">Product Description:</span>
                    <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>
    </div>
  )
}

export default SingleProduct
