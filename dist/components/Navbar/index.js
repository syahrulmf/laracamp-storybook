"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Brand_1 = __importDefault(require("../Brand"));
function Navbar({ children, cta, className, pathname }) {
    const [isMenuActive, setMenuActive] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)("header", { className: "shadow-[0px_6px_60px_rgba(22,_28,_51,_0.06)]", children: (0, jsx_runtime_1.jsxs)("div", { className: "px-4 container mx-auto flex justify-between items-center py-8", children: [(0, jsx_runtime_1.jsx)(Brand_1.default, { className: "w-44 h-10 mr-12 flex items-center" }), (0, jsx_runtime_1.jsxs)("button", { className: "relative z-30 w-7 h-7 flex lg:hidden flex-col items-center justify-center transition-all gap-y-1 hover:gap-y-2", onClick: () => setMenuActive((prev) => !prev), children: [(0, jsx_runtime_1.jsx)("span", { className: [
                                "w-7 h-1 bg-purple transition-all",
                                isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
                            ].join(" ") }), (0, jsx_runtime_1.jsx)("span", { className: [
                                "w-7 h-1 bg-purple transition-all",
                                isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
                            ].join(" ") }), (0, jsx_runtime_1.jsx)("span", { className: [
                                "w-7 h-1 bg-purple transition-all",
                                isMenuActive ? "absolute top-3 -rotate-45" : "rotate-0",
                            ].join(" ") })] }), (0, jsx_runtime_1.jsxs)("div", { className: [
                        "bg-white z-20 gap-y-8 w-full flex-col lg:flex-row items-center justify-center lg:justify-between",
                        isMenuActive ? "flex fixed inset-0" : "relative hidden md:flex",
                    ].join(" "), children: [(0, jsx_runtime_1.jsx)("ul", { className: [
                                "flex lg:flex flex-col items-center gap-y-8 ml-auto lg:ml-0 mr-auto gap-x-8",
                                isMenuActive ? "flex" : "md:hidden md:flex-row",
                            ].join(" "), children: react_1.Children.toArray(children).map((menu, i) => {
                                return ((0, jsx_runtime_1.jsx)("li", { className: "", children: (0, jsx_runtime_1.jsx)(menu.type, { ...menu.props, className: pathname === menu.props.href
                                            ? className.active
                                            : className.idle, children: (0, jsx_runtime_1.jsx)(menu.props.children.type, { className: [
                                                ...(menu?.props?.children?.props?.className ?? ""),
                                                pathname === menu.props.href
                                                    ? className.active
                                                    : className.idle,
                                            ].join(" "), children: menu.props.children.props.children }) }) }, i));
                            }) }), (0, jsx_runtime_1.jsx)("div", { className: [
                                "flex flex-col gap-y-8 gap-x-4 mr-auto ml-auto",
                                isMenuActive ? "lg:flex-row lg:mr-0" : "md:flex-row md:mr-0",
                            ].join(" "), children: cta })] })] }) }));
}
exports.default = Navbar;
