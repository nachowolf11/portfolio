import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useLanguage } from '../hooks'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Dropdown = () => {

const {t, onChangeLanguage} = useLanguage();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button style={{ fontFamily:'Kanit', fontWeight:400 }} className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-orange-50 hover:bg-red-300">
          {t('header.language')}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                    data-lang='es'
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    style={{ fontFamily:'Kanit', fontWeight:400 }}
                    onClick={onChangeLanguage}
                >
                    {t('header.spanish')}
                </span>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <span
                    data-lang='en'
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    style={{ fontFamily:'Kanit', fontWeight:400 }}
                    onClick={onChangeLanguage}
                >
                    {t('header.english')}
                </span>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
