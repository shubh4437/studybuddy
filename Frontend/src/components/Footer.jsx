import React from "react";

function Footer() {
  return (
    <>
      <div className=" max-w-screen-2xl container  mx-auto  md:px-12">
        <hr class="border-t-4 border-pink-300 shadow-lg w-full" />
        <br />

        <footer className="footer bg-neutral text-neutral-content items-center p-4">
          <aside className="grid-flow-col items-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              {" "}
              Made with ❤️ by{" "}
              <a
                href="https://www.linkedin.com/in/shubham-kumar-4011b132a/"
                className=" text-blue-600 "
              >
                Shubham
              </a>{" "}
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href="https://www.instagram.com/shubh.4437/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-pink-500"
              >
                <path d="M12 2.163c3.313 0 3.716.012 5.022.072 1.276.056 2.338.288 3.218 1.169.88.88 1.113 1.942 1.169 3.218.06 1.306.072 1.71.072 5.022s-.012 3.716-.072 5.022c-.056 1.276-.288 2.338-1.169 3.218-.88.88-1.942 1.113-3.218 1.169-1.306.06-1.71.072-5.022.072s-3.716-.012-5.022-.072c-1.276-.056-2.338-.288-3.218-1.169-.88-.88-1.113-1.942-1.169-3.218-.06-1.306-.072-1.71-.072-5.022s.012-3.716.072-5.022c.056-1.276.288-2.338 1.169-3.218.88-.88 1.942-1.113 3.218-1.169 1.306-.06 1.71-.072 5.022-.072zm0 1.67c-3.214 0-3.615.012-4.895.07-1.067.052-1.85.255-2.548.953-.698.698-.901 1.481-.953 2.548-.058 1.28-.07 1.68-.07 4.895s.012 3.615.07 4.895c.052 1.067.255 1.85.953 2.548.698.698 1.481.901 2.548.953 1.28.058 1.68.07 4.895.07s3.615-.012 4.895-.07c1.067-.052 1.85-.255 2.548-.953.698-.698.901-1.481.953-2.548.058-1.28.07-1.68.07-4.895s-.012-3.615-.07-4.895c-.052-1.067-.255-1.85-.953-2.548-.698-.698-1.481-.901-2.548-.953-1.28-.058-1.68-.07-4.895-.07zM12 6.697a5.303 5.303 0 1 0 0 10.606 5.303 5.303 0 0 0 0-10.606zm0 8.637a3.334 3.334 0 1 1 0-6.669 3.334 3.334 0 0 1 0 6.669zm6.406-8.406a1.44 1.44 0 1 0-2.878 0 1.44 1.44 0 0 0 2.878 0z"></path>
              </svg>
            </a>

            <a href="https://github.com/shubh4437" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current text-gray-900"
              >
                <path d="M12 2c-5.528 0-10 4.472-10 10 0 4.418 2.868 8.167 6.84 9.486.5.092.68-.217.68-.483 0-.238-.009-.871-.014-1.711-2.782.604-3.369-1.344-3.369-1.344-.453-.922-1.105-1.167-1.105-1.167-.905-.619.069-.607.069-.607 1.002.069 1.534 1.031 1.534 1.031.887 1.515 2.32 1.078 2.877.826.089-.643.348-1.077.633-1.32-2.329-.264-4.773-1.164-4.773-5.184 0-1.146.409-2.081 1.085-2.816-.109-.264-.47-.841-.052-1.754 0 0 1.342-.428 4.234 1.615 1.232-.34 2.551-.51 3.868-.515 1.317.005 2.637.175 3.868.515 2.892-2.043 4.234-1.615 4.234-1.615-.419.913-.057 1.49-.052 1.754.676.735 1.085 1.67 1.085 2.816 0 4.025-2.448 4.918-4.783 5.184.362.313.689.928.689 1.869 0 1.351-.015 2.426-.015 2.755 0 .269.18.581.687.483 3.974-1.319 6.842-5.067 6.842-9.486 0-5.528-4.472-10-10-10z"></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-kumar-4011b132a/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current text-blue-700"
              >
                <path d="M20.452 2H3.547C2.689 2 2 2.69 2 3.547v16.906C2 21.311 2.689 22 3.547 22h16.906c.858 0 1.547-.689 1.547-1.547V3.547c0-.858-.689-1.547-1.547-1.547zm-12.58 15.003h-3.4v-9.7h3.4v9.7zm-1.7-11.1c-1.1 0-1.8-.7-1.8-1.6 0-.9.7-1.6 1.8-1.6 1.1 0 1.8.7 1.8 1.6 0 .9-.7 1.6-1.8 1.6zm14.3 11.1h-3.4v-4.8c0-1.1-.4-1.9-1.4-1.9-1.1 0-1.7.7-1.7 1.8v4.9h-3.4v-9.7h3.4v1.3c.5-.8 1.3-1.3 2.3-1.3 1.6 0 2.9 1.1 2.9 3.2v5.8z"></path>
              </svg>
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;