<template>
  <Disclosure as="nav"
    class="relative bg-black-300 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company" />
          </div>
          <!-- Desktop Menu Links -->
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4 items-center">
              <router-link v-for="item in navigation" :key="item.name" :to="item.to"
                :class="[item.current ? 'bg-[#a63faf] text-white' : 'text-gray-300 hover:bg-gray-800/50 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']">
                {{ item.name }}
              </router-link>
              <!-- External Classic Link -->
              <a href="https://evanlei1.neocities.org/" target="_blank"
                class="text-gray-300 hover:bg-gray-800/50 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                Classic Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Links -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3 flex flex-col">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="router-link" :to="item.to"
          class="text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
          {{ item.name }}
        </DisclosureButton>
        <a href="https://evanlei1.neocities.org/" target="_blank"
          class="text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
          Classic Website
        </a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Transport', to: '/transport/bus-list' },
  { name: 'Gaming', to: '/gamingView' },
  { name: 'Education', to: '/projectView' },
  { name: 'Posts', to: '/updatesPage' },
  { name: 'Socials', to: '/socialPage' },
  { name: 'About', to: '/aboutPage' },
]
</script>
