import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div className="h-10">
        <div className="basis-0 grow shrink-0 ">
          <nav className="flex justify-start py-2 text-slate-500 whitespace-nowrap justify-items-stretch overflow-x-auto">
            <Link href="/">
              <a className=" py-2 px-4 mr-1 rounded-md bg-none hover:text-blue-400 hover:bg-blue-50">
                <div>
                  <p>홈</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="py-2 px-4 mr-1 rounded-md bg-none hover:text-blue-400 hover:bg-blue-50">
                <div>
                  <p>렌즈찾기</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="py-2 px-4 mr-1 rounded-md bg-none hover:text-blue-400 hover:bg-blue-50">
                <div>
                  <p>내 주변 안경원</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="py-2 px-4 mr-1 rounded-md bg-none hover:text-blue-400 hover:bg-blue-50">
                <div>
                  <p>고객센터</p>
                </div>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;

{
  /* <ul className="flex py-2 text-slate-500 w-full overflow-x-auto">
<li className="py-2 px-4 mr-1 rounded-md bg-none hover:text-blue-400 hover:bg-blue-50">
  <Link href="/">
    <a>홈</a>
  </Link>
</li>
<li className="py-2 px-4 mr-1 rounded-md bg-none hover:text-blue-400  hover:bg-blue-50">
  <Link href="/">
    <a>렌즈찾기</a>
  </Link>
</li>
<li className="py-2 px-4 mr-1 rounded-md bg-none hover:text-blue-400  hover:bg-blue-50">
  <Link href="/">
    <a>내 주변 안경원</a>
  </Link>
</li>
<li className="py-2 px-4 mr-1 rounded-md bg-none hover:text-blue-400  hover:bg-blue-50">
  <Link href="/">
    <a>고객센터</a>
  </Link>
</li>
</ul> */
}
