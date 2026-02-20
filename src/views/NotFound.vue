<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">

        <!-- Big 404 -->
        <h1 class="text-7xl font-extrabold text-green-500 tracking-widest">
            404
        </h1>

        <!-- Message -->
        <h2 class="mt-6 text-2xl font-semibold text-gray-800">
            Oops! We couldn’t find that page.
        </h2>

        <p class="mt-3 text-gray-600 max-w-md">
            The page you’re looking for might have been removed, renamed,
            or is temporarily unavailable.
        </p>

        <!-- Show wrong route -->
        <p class="mt-2 text-sm text-gray-400">
            Requested URL: <span class="font-medium">{{ $route.path }}</span>
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex gap-4 flex-wrap justify-center">

            <!-- Go Back -->
            <button @click="$router.back()"
                class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Go Back
            </button>

            <!-- Go to Products -->
            <router-link to="/products"
                class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-indigo-700 transition shadow">
                Browse Products
            </router-link>

        </div>

    </div>
</template>