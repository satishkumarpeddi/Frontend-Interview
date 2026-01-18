import { Button } from "./ui/button";
const Header = () => {
  return (
    <div className="">
      <nav className="flex justify-between p-3 items-center ">
        <h1 className="uppercase font-bold">cm monk</h1>
        <ul className="flex gap-x-4">
          <li className="font-semibold  cursor-pointer">Tools</li>
          <li className="font-semibold  cursor-pointer">Practice</li>
          <li className="font-semibold  cursor-pointer">Events</li>
          <li className="font-semibold  cursor-pointer">Job Board</li>
          <li className="font-semibold  cursor-pointer">Points</li>
        </ul>
        <Button
          variant="secondary"
          className="cursor-pointer outline-none bg-blue-500 hover:bg-blue-600 text-white"
        >
          Profile
        </Button>
      </nav>
      <div className="p-2">
        <hr />
      </div>
    </div>
  );
};

export default Header;
