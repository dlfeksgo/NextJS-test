import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <div>
              <Image
                src="/images/Alarm.svg"
                alt="alarm"
                width={24}
                height={24}
              />
            </div>
          </Link>
          <div>
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={50}
              height={20}
              priority={true}
            />
          </div>
          <div className="flex">
            <Link href="/">
              <div className="mr-2">
                <Image
                  src="/images/Search.svg"
                  alt="search"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
            <div>
              <Image src="/images/Cart.svg" alt="cart" width={24} height={24} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
