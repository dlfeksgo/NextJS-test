import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <a>
              <Image
                src="/images/Alarm.svg"
                alt="alarm"
                width={24}
                height={24}
              />
            </a>
          </Link>
          <a>
            <Image src="/images/logo.svg" alt="logo" width={50} height={20} />
          </a>
          <div className="flex">
            <Link href="/">
              <a className="mr-2">
                <Image
                  src="/images/Search.svg"
                  alt="search"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  src="/images/Cart.svg"
                  alt="cart"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
