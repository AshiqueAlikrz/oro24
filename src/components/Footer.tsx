
const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-primary-yellow px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center sm:justify-between gap-3 sm:gap-2 text-[10px] sm:text-xs text-white md:flex-row">
          <p className="text-center sm:text-left">© 2025 ORO24 Facilities Management. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a href="#" className="hover:underline transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
