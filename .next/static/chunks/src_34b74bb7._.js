(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/page-header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PageHeader": (()=>PageHeader),
    "PageHeaderDescription": (()=>PageHeaderDescription),
    "PageHeaderHeading": (()=>PageHeaderHeading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function PageHeader({ className, children, ...props }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex max-w-full flex-col gap-2", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    onClick: ()=>router.back(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/page-header.tsx",
                            lineNumber: 29,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/src/components/page-header.tsx",
                            lineNumber: 30,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/page-header.tsx",
                    lineNumber: 23,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/page-header.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/page-header.tsx",
            lineNumber: 22,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/page-header.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(PageHeader, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PageHeader;
function PageHeaderHeading({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/page-header.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c1 = PageHeaderHeading;
function PageHeaderDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-prose text-balance text-muted-foreground sm:text-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/page-header.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c2 = PageHeaderDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PageHeader");
__turbopack_context__.k.register(_c1, "PageHeaderHeading");
__turbopack_context__.k.register(_c2, "PageHeaderDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ai/flows/data:77d91d [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40e41fbb6a33183dd957aafc02adb3547002b3fd39":"analyzeSensorData"},"src/ai/flows/sensor-analysis.ts",""] */ __turbopack_context__.s({
    "analyzeSensorData": (()=>analyzeSensorData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var analyzeSensorData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40e41fbb6a33183dd957aafc02adb3547002b3fd39", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "analyzeSensorData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2Vuc29yLWFuYWx5c2lzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4ndXNlIHNlcnZlcic7XHJcblxyXG4vKipcclxuICogQGZpbGVPdmVydmlldyBUaGlzIGZpbGUgY29udGFpbnMgdGhlIEdlbmtpdCBmbG93IGZvciBhbmFseXppbmcgc2Vuc29yIGRhdGEgZnJvbSBhIGZhcm0sXHJcbiAqIGFuZCBpbnRlZ3JhdGluZyBjcm9wIGFuZCBnb3Zlcm5tZW50IHNjaGVtZSByZWNvbW1lbmRhdGlvbnMuXHJcbiAqXHJcbiAqIC0gYW5hbHl6ZVNlbnNvckRhdGEgLSBBIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyB0aGUgc2Vuc29yIGRhdGEgYW5hbHlzaXMgcHJvY2Vzcy5cclxuICogLSBTZW5zb3JBbmFseXNpc0lucHV0IC0gVGhlIGlucHV0IHR5cGUgZm9yIHRoZSBhbmFseXplU2Vuc29yRGF0YSBmdW5jdGlvbi5cclxuICogLSBTZW5zb3JBbmFseXNpc091dHB1dCAtIFRoZSByZXR1cm4gdHlwZSBmb3IgdGhlIGFuYWx5emVTZW5zb3JEYXRhIGZ1bmN0aW9uLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7YWl9IGZyb20gJ0AvYWkvZ2Vua2l0JztcclxuaW1wb3J0IHt6fSBmcm9tICdnZW5raXQnO1xyXG5pbXBvcnQgeyByZWNvbW1lbmRCZXN0Q3JvcHMgfSBmcm9tICcuL2Nyb3AtcmVjb21tZW5kYXRpb24nO1xyXG5pbXBvcnQgeyByZWNvbW1lbmRHb3ZTY2hlbWVzIH0gZnJvbSAnLi9nb3Zlcm5tZW50LXNjaGVtZS1yZWNvbW1lbmRhdGlvbic7XHJcblxyXG5cclxuY29uc3QgU2Vuc29yQW5hbHlzaXNJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcclxuICBzdGF0ZTogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIHN0YXRlIHdoZXJlIHRoZSBmYXJtIGlzIGxvY2F0ZWQuJyksXHJcbiAgc29pbFR5cGU6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSB0eXBlIG9mIHNvaWwgKGUuZy4sIExhdGVyaXRlLCBSZWQgU29pbCwgQmxhY2sgQ290dG9uKS4nKSxcclxuICBwaFZhbHVlOiB6Lm51bWJlcigpLmRlc2NyaWJlKCdUaGUgcEggdmFsdWUgb2YgdGhlIHNvaWwuJyksXHJcbiAgbW9pc3R1cmVMZXZlbDogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIG1vaXN0dXJlIGxldmVsIChlLmcuLCBMb3csIE1lZGl1bSwgSGlnaCkuJyksXHJcbiAgdGVtcGVyYXR1cmU6IHoubnVtYmVyKCkuZGVzY3JpYmUoJ1RoZSBjdXJyZW50IHRlbXBlcmF0dXJlIGluIENlbHNpdXMuJyksXHJcbiAgc3VubGlnaHRMZXZlbDogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIGxldmVsIG9mIHN1bmxpZ2h0IGV4cG9zdXJlIChlLmcuLCBMb3csIE1vZGVyYXRlLCBIaWdoKS4nKSxcclxuICBzZWFzb246IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSBjdXJyZW50IHNlYXNvbiAoZS5nLiwgU3ByaW5nLCBTdW1tZXIsIEF1dHVtbiwgV2ludGVyKS4nKSxcclxufSk7XHJcbmV4cG9ydCB0eXBlIFNlbnNvckFuYWx5c2lzSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBTZW5zb3JBbmFseXNpc0lucHV0U2NoZW1hPjtcclxuXHJcblxyXG5jb25zdCBTY2hlbWVTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICBuYW1lOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgZnVsbCBuYW1lIG9mIHRoZSBnb3Zlcm5tZW50IHNjaGVtZS4nKSxcclxuICAgIHVybDogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIG9mZmljaWFsIGdvdmVybm1lbnQgVVJMIGZvciB0aGUgc2NoZW1lLicpLFxyXG59KTtcclxuXHJcbmNvbnN0IFNlbnNvckFuYWx5c2lzT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgYW5hbHlzaXM6IHouc3RyaW5nKCkuZGVzY3JpYmUoXCJBIHNob3J0LCBzdW1tYXJpemVkIGFuYWx5c2lzIG9mIHRoZSBwcm92aWRlZCBzb2lsIGFuZCBlbnZpcm9ubWVudGFsIGNvbmRpdGlvbnMuXCIpLFxyXG4gICAgcmVjb21tZW5kZWRDcm9wczogei5vYmplY3Qoe1xyXG4gICAgICAgIGNyb3BzOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlc2NyaWJlKCdBbiBhcnJheSBvZiByZWNvbW1lbmRlZCBjcm9wcyBiYXNlZCBvbiB0aGUgaW5wdXQgZGF0YS4nKSxcclxuICAgICAgICByZWFzb25zOiB6LmFycmF5KHouc3RyaW5nKCkpLmRlc2NyaWJlKCdSZWFzb25zIGZvciByZWNvbW1lbmRpbmcgZWFjaCBjcm9wLicpLFxyXG4gICAgfSksXHJcbiAgICBnb3Zlcm5tZW50U2NoZW1lczogei5vYmplY3Qoe1xyXG4gICAgICAgIGNlbnRyYWxTY2hlbWVzOiB6LmFycmF5KFNjaGVtZVNjaGVtYSkuZGVzY3JpYmUoJ1JlbGV2YW50IENlbnRyYWwgR292ZXJubWVudCBTY2hlbWVzLicpLFxyXG4gICAgICAgIHN0YXRlU2NoZW1lczogei5hcnJheShTY2hlbWVTY2hlbWEpLmRlc2NyaWJlKCdBcHBsaWNhYmxlIFN0YXRlIEdvdmVybm1lbnQgU2NoZW1lcy4nKSxcclxuICAgICAgICB3b21lblNjaGVtZXM6IHouYXJyYXkoU2NoZW1lU2NoZW1hKS5kZXNjcmliZSgnV29tZW4tc3BlY2lmaWMgYWdyaWN1bHR1cmFsIHNjaGVtZXMuJyksXHJcbiAgICB9KSxcclxufSk7XHJcbmV4cG9ydCB0eXBlIFNlbnNvckFuYWx5c2lzT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgU2Vuc29yQW5hbHlzaXNPdXRwdXRTY2hlbWE+O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuYWx5emVTZW5zb3JEYXRhKFxyXG4gIGlucHV0OiBTZW5zb3JBbmFseXNpc0lucHV0XHJcbik6IFByb21pc2U8U2Vuc29yQW5hbHlzaXNPdXRwdXQ+IHtcclxuICByZXR1cm4gc2Vuc29yQW5hbHlzaXNGbG93KGlucHV0KTtcclxufVxyXG5cclxuY29uc3QgYW5hbHlzaXNQcm9tcHQgPSBhaS5kZWZpbmVQcm9tcHQoe1xyXG4gIG5hbWU6ICdzZW5zb3JBbmFseXNpc1Byb21wdCcsXHJcbiAgaW5wdXQ6IHtzY2hlbWE6IFNlbnNvckFuYWx5c2lzSW5wdXRTY2hlbWF9LFxyXG4gIG91dHB1dDoge3NjaGVtYTogei5vYmplY3QoeyBhbmFseXNpczogei5zdHJpbmcoKSB9KX0sXHJcbiAgcHJvbXB0OiBgWW91IGFyZSBhbiBleHBlcnQgYWdyaWN1bHR1cmFsIHNjaWVudGlzdC4gQW5hbHl6ZSB0aGUgZm9sbG93aW5nIHNlbnNvciBkYXRhIGZyb20gYSBmYXJtIGFuZCBwcm92aWRlIGEgc2hvcnQsIHN1bW1hcml6ZWQgYW5hbHlzaXMgb2YgdGhlIHNvaWwgYW5kIGVudmlyb25tZW50YWwgY29uZGl0aW9ucy5cclxuXHJcbkxvY2F0aW9uIGFuZCBDb25kaXRpb25zOlxyXG4tIFN0YXRlOiB7e3tzdGF0ZX19fVxyXG4tIFNlYXNvbjoge3t7c2Vhc29ufX19XHJcblxyXG5Tb2lsIEFuYWx5c2lzOlxyXG4tIFNvaWwgVHlwZToge3t7c29pbFR5cGV9fX1cclxuLSBwSCBWYWx1ZToge3t7cGhWYWx1ZX19fVxyXG4tIE1vaXN0dXJlIExldmVsOiB7e3ttb2lzdHVyZUxldmVsfX19XHJcblxyXG5FbnZpcm9ubWVudGFsIEZhY3RvcnM6XHJcbi0gVGVtcGVyYXR1cmU6IHt7e3RlbXBlcmF0dXJlfX19wrBDXHJcbi0gU3VubGlnaHQgTGV2ZWw6IHt7e3N1bmxpZ2h0TGV2ZWx9fX1cclxuXHJcblByb3ZpZGUgYSBicmllZiwgb25lIG9yIHR3byBzZW50ZW5jZSBzdW1tYXJ5IG9mIHRoZSBjb25kaXRpb25zLiBGb3IgZXhhbXBsZTogXCJUaGUgc29pbCBpcyBzbGlnaHRseSBhbGthbGluZSB3aXRoIGhpZ2ggbW9pc3R1cmUsIHdoaWNoIGlzIHN1aXRhYmxlIGZvciBtb25zb29uIGNyb3BzLlwiYCxcclxufSk7XHJcblxyXG5jb25zdCBzZW5zb3JBbmFseXNpc0Zsb3cgPSBhaS5kZWZpbmVGbG93KFxyXG4gIHtcclxuICAgIG5hbWU6ICdzZW5zb3JBbmFseXNpc0Zsb3cnLFxyXG4gICAgaW5wdXRTY2hlbWE6IFNlbnNvckFuYWx5c2lzSW5wdXRTY2hlbWEsXHJcbiAgICBvdXRwdXRTY2hlbWE6IFNlbnNvckFuYWx5c2lzT3V0cHV0U2NoZW1hLFxyXG4gIH0sXHJcbiAgYXN5bmMgKGlucHV0KSA9PiB7XHJcbiAgICAvLyAxLiBHZXQgc29pbCBhbmFseXNpc1xyXG4gICAgY29uc3QgeyBvdXRwdXQ6IGFuYWx5c2lzUmVzdWx0IH0gPSBhd2FpdCBhbmFseXNpc1Byb21wdChpbnB1dCk7XHJcbiAgICBcclxuICAgIC8vIDIuIEdldCBjcm9wIHJlY29tbWVuZGF0aW9uc1xyXG4gICAgY29uc3QgY3JvcFJlY3MgPSBhd2FpdCByZWNvbW1lbmRCZXN0Q3JvcHMoe1xyXG4gICAgICAgIHNvaWxOYXR1cmU6IGlucHV0LnNvaWxUeXBlLFxyXG4gICAgICAgIHBoVmFsdWU6IGlucHV0LnBoVmFsdWUsXHJcbiAgICAgICAgd2VhdGhlckNvbmRpdGlvbnM6IGAke2lucHV0LnN1bmxpZ2h0TGV2ZWx9IHN1bmxpZ2h0LCAke2lucHV0LnRlbXBlcmF0dXJlfcKwQywgJHtpbnB1dC5zZWFzb259IHNlYXNvbi5gLFxyXG4gICAgICAgIHN0YXRlOiBpbnB1dC5zdGF0ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIDMuIEdldCBnb3Zlcm5tZW50IHNjaGVtZXNcclxuICAgIGNvbnN0IGdvdlNjaGVtZXMgPSBhd2FpdCByZWNvbW1lbmRHb3ZTY2hlbWVzKHtcclxuICAgICAgICBzdGF0ZTogaW5wdXQuc3RhdGUsXHJcbiAgICAgICAgLy8gVXNpbmcgYSBnZW5lcmFsIHJlcXVpcmVtZW50IHRvIGZldGNoIGJyb2FkIHNjaGVtZXMgcmVsZXZhbnQgdG8gdGhlIGFuYWx5c2lzXHJcbiAgICAgICAgcmVxdWlyZW1lbnRzOiBgU2NoZW1lcyBmb3IgYSBmYXJtZXIgd2l0aCAke2lucHV0LnNvaWxUeXBlfSBzb2lsLCBkZWFsaW5nIHdpdGggJHtpbnB1dC5tb2lzdHVyZUxldmVsfSBtb2lzdHVyZS5gXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhbmFseXNpczogYW5hbHlzaXNSZXN1bHQhLmFuYWx5c2lzLFxyXG4gICAgICByZWNvbW1lbmRlZENyb3BzOiB7XHJcbiAgICAgICAgY3JvcHM6IGNyb3BSZWNzLnJlY29tbWVuZGVkQ3JvcHMsXHJcbiAgICAgICAgcmVhc29uczogY3JvcFJlY3MucmVhc29ucyxcclxuICAgICAgfSxcclxuICAgICAgZ292ZXJubWVudFNjaGVtZXM6IHtcclxuICAgICAgICBjZW50cmFsU2NoZW1lczogZ292U2NoZW1lcy5jZW50cmFsU2NoZW1lcyxcclxuICAgICAgICBzdGF0ZVNjaGVtZXM6IGdvdlNjaGVtZXMuc3RhdGVTY2hlbWVzLFxyXG4gICAgICAgIHdvbWVuU2NoZW1lczogZ292U2NoZW1lcy53b21lblNjaGVtZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuKTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwU0FpRHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const AccordionItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
_c1 = AccordionItem;
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = AccordionTrigger;
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const AccordionContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
_c5 = AccordionContent;
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "AccordionItem$React.forwardRef");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "AccordionTrigger");
__turbopack_context__.k.register(_c4, "AccordionContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sensor-data-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SensorDataCard": (()=>SensorDataCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$test$2d$tube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TestTube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/test-tube.js [app-client] (ecmascript) <export default as TestTube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloudy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloudy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloudy.js [app-client] (ecmascript) <export default as Cloudy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sprout.js [app-client] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$person$2d$standing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PersonStanding$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/person-standing.js [app-client] (ecmascript) <export default as PersonStanding>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$77d91d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:77d91d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$translation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-translation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const texts = {
    sensorReadings: "Current Sensor Readings",
    recordId: "Record ID",
    state: "State",
    season: "Season",
    soilType: "Soil Type",
    phValue: "pH Value",
    moisture: "Moisture",
    temperature: "Temperature",
    sunlight: "Sunlight",
    analyzeButton: "Analyze Data",
    resultTitle: "Comprehensive Analysis",
    resultDescription: "AI-powered insights, recommendations, and schemes.",
    analysis: "Soil Analysis",
    recommendations: "Recommendations",
    resultsPlaceholder: "Click 'Analyze Data' to see the AI-powered analysis.",
    quotaError: "You have exceeded your API quota. Please try again later or check your billing plan.",
    cropRecommendations: "Crop Recommendations",
    recommendedCrops: "Recommended Crops",
    governmentSchemes: "Government Schemes",
    centralSchemes: "Central Government Schemes",
    stateSchemes: "State Government Schemes",
    womenSchemes: "Women-Specific Schemes",
    noSchemes: "No specific schemes found."
};
function SensorDataCard({ data }) {
    _s();
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$translation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(texts);
    const parseTemperature = (tempRange)=>{
        const numbers = tempRange.match(/\d+/g);
        if (!numbers) return 25; // Default value
        const avg = (parseInt(numbers[0]) + parseInt(numbers[1] || numbers[0])) / 2;
        return Math.round(avg);
    };
    const handleAnalyze = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SensorDataCard.useCallback[handleAnalyze]": async ()=>{
            setLoading(true);
            setResult(null);
            setError(null);
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$77d91d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["analyzeSensorData"])({
                    state: data.State,
                    soilType: data.Soil_Type,
                    phValue: data.pH_Value,
                    moistureLevel: data.Moisture_Level,
                    temperature: parseTemperature(data.temperature),
                    sunlightLevel: data.Sunlight_Level,
                    season: data.Season
                });
                setResult(response);
            } catch (e) {
                console.error(e);
                if (e.message?.includes('429')) {
                    setError(t('quotaError'));
                } else {
                    setError('An error occurred during analysis.');
                }
            } finally{
                setLoading(false);
            }
        }
    }["SensorDataCard.useCallback[handleAnalyze]"], [
        data,
        t
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorDataCard.useEffect": ()=>{
            handleAnalyze();
        }
    }["SensorDataCard.useEffect"], [
        handleAnalyze
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "font-headline",
                                            children: t('sensorReadings')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                            lineNumber: 106,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: [
                                                t('state'),
                                                ": ",
                                                data.State,
                                                " | ",
                                                t('season'),
                                                ": ",
                                                data.Season
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                            lineNumber: 107,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                    lineNumber: 105,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    children: [
                                        t('recordId'),
                                        ": ",
                                        data.rowIndex
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                    lineNumber: 109,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sensor-data-card.tsx",
                            lineNumber: 104,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sensor-data-card.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-3 rounded-lg bg-muted/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloudy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloudy$3e$__["Cloudy"], {
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 114,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: t('soilType')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 116,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: data.Soil_Type
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 117,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 115,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 113,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-3 rounded-lg bg-muted/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$test$2d$tube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TestTube$3e$__["TestTube"], {
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 121,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: t('phValue')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 123,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: data.pH_Value
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 124,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 122,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 120,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-3 rounded-lg bg-muted/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 128,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: t('moisture')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 130,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: data.Moisture_Level
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 131,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 129,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-3 rounded-lg bg-muted/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 135,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: t('temperature')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 137,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: data.temperature
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 138,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 136,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 134,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 p-3 rounded-lg bg-muted/50 col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 142,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: t('sunlight')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 144,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: data.Sunlight_Level
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 145,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 141,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sensor-data-card.tsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleAnalyze,
                            disabled: loading,
                            className: "w-full",
                            children: [
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                    lineNumber: 151,
                                    columnNumber: 29
                                }, this),
                                t('analyzeButton')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sensor-data-card.tsx",
                            lineNumber: 150,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sensor-data-card.tsx",
                        lineNumber: 149,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sensor-data-card.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "font-headline",
                                children: t('resultTitle')
                            }, void 0, false, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: t('resultDescription')
                            }, void 0, false, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sensor-data-card.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "min-h-[250px]",
                        children: [
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center items-center h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-8 w-8 animate-spin text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-destructive",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 168,
                                columnNumber: 21
                            }, this),
                            result && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                type: "multiple",
                                className: "w-full",
                                defaultValue: [
                                    'soil-analysis',
                                    'crop-recs',
                                    'gov-schemes'
                                ],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "soil-analysis",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$test$2d$tube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TestTube$3e$__["TestTube"], {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 29
                                                        }, this),
                                                        t('analysis')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 173,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: result.analysis
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 179,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "crop-recs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"], {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 29
                                                        }, this),
                                                        t('cropRecommendations')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 184,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-3",
                                                    children: result.recommendedCrops.crops.map((crop, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "pb-3 border-b border-border/50 last:border-b-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium flex-1",
                                                                    children: crop
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 33
                                                                }, this),
                                                                result.recommendedCrops.reasons[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-2 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                            className: "h-4 w-4 mt-1 text-accent flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                            lineNumber: 197,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground",
                                                                            children: result.recommendedCrops.reasons[index]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                            lineNumber: 198,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 26
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "gov-schemes",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 29
                                                        }, this),
                                                        t('governmentSchemes')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 207,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                                    type: "multiple",
                                                    className: "w-full",
                                                    defaultValue: [
                                                        'central',
                                                        'state',
                                                        'women'
                                                    ],
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                            value: "central",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                    className: "text-xs py-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                lineNumber: 218,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            t('centralSchemes')
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                    lineNumber: 216,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                    className: "pt-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc pl-6 space-y-2 text-muted-foreground",
                                                                        children: result.governmentSchemes.centralSchemes.length > 0 ? result.governmentSchemes.centralSchemes.map((scheme, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "text-xs",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: scheme.url,
                                                                                    target: "_blank",
                                                                                    rel: "noopener noreferrer",
                                                                                    className: "hover:underline hover:text-primary flex items-center gap-1",
                                                                                    children: [
                                                                                        scheme.name,
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                            className: "h-3 w-3"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                            lineNumber: 228,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                    lineNumber: 226,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, `central-${index}`, false, {
                                                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                lineNumber: 225,
                                                                                columnNumber: 37
                                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('noSchemes')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                            lineNumber: 231,
                                                                            columnNumber: 42
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                            value: "state",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                    className: "text-xs py-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                lineNumber: 238,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            t('stateSchemes')
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                        lineNumber: 237,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                    className: "pt-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc pl-6 space-y-2 text-muted-foreground",
                                                                        children: result.governmentSchemes.stateSchemes.length > 0 ? result.governmentSchemes.stateSchemes.map((scheme, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "text-xs",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: scheme.url,
                                                                                    target: "_blank",
                                                                                    rel: "noopener noreferrer",
                                                                                    className: "hover:underline hover:text-primary flex items-center gap-1",
                                                                                    children: [
                                                                                        scheme.name,
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                            className: "h-3 w-3"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                            lineNumber: 248,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                    lineNumber: 246,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, `state-${index}`, false, {
                                                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                lineNumber: 245,
                                                                                columnNumber: 37
                                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('noSchemes')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                            lineNumber: 251,
                                                                            columnNumber: 42
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 30
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                            value: "women",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                                    className: "text-xs py-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$person$2d$standing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PersonStanding$3e$__["PersonStanding"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                lineNumber: 258,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            t('womenSchemes')
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                                    className: "pt-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "list-disc pl-6 space-y-2 text-muted-foreground",
                                                                        children: result.governmentSchemes.womenSchemes.length > 0 ? result.governmentSchemes.womenSchemes.map((scheme, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "text-xs",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: scheme.url,
                                                                                    target: "_blank",
                                                                                    rel: "noopener noreferrer",
                                                                                    className: "hover:underline hover:text-primary flex items-center gap-1",
                                                                                    children: [
                                                                                        scheme.name,
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                            className: "h-3 w-3"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                            lineNumber: 268,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                    lineNumber: 266,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            }, `women-${index}`, false, {
                                                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                                lineNumber: 265,
                                                                                columnNumber: 37
                                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('noSchemes')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                            lineNumber: 271,
                                                                            columnNumber: 42
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                        lineNumber: 263,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sensor-data-card.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sensor-data-card.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 24
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sensor-data-card.tsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 171,
                                columnNumber: 14
                            }, this),
                            !loading && !result && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-muted-foreground py-10",
                                children: t('resultsPlaceholder')
                            }, void 0, false, {
                                fileName: "[project]/src/components/sensor-data-card.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sensor-data-card.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sensor-data-card.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sensor-data-card.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(SensorDataCard, "ggWDrrtW1SEgzwlLnDT4BY5VDzg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$translation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = SensorDataCard;
var _c;
__turbopack_context__.k.register(_c, "SensorDataCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/crop-data.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"State\":\"Manipur\",\"Soil_Type\":\"Laterite\",\"pH_Value\":8.4,\"Moisture_Level\":\"Medium\",\"temperature\":\"24-34°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Spring\",\"rowIndex\":1},{\"State\":\"Karnataka\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":6.7,\"Moisture_Level\":\"High\",\"temperature\":\"28-35°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Summer\",\"rowIndex\":2},{\"State\":\"Telangana\",\"Soil_Type\":\"Laterite\",\"pH_Value\":6.3,\"Moisture_Level\":\"Medium\",\"temperature\":\"22-32°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Autumn\",\"rowIndex\":3},{\"State\":\"Kerala\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":8.2,\"Moisture_Level\":\"High\",\"temperature\":\"27-36°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":4},{\"State\":\"Haryana\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":6.1,\"Moisture_Level\":\"High\",\"temperature\":\"23-33°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Spring\",\"rowIndex\":5},{\"State\":\"Nagaland\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":6.2,\"Moisture_Level\":\"High\",\"temperature\":\"22-31°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Summer\",\"rowIndex\":6},{\"State\":\"Odisha\",\"Soil_Type\":\"Laterite\",\"pH_Value\":5.8,\"Moisture_Level\":\"Medium\",\"temperature\":\"25-35°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Autumn\",\"rowIndex\":7},{\"State\":\"Tamil Nadu\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":7.2,\"Moisture_Level\":\"Medium\",\"temperature\":\"24-32°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Winter\",\"rowIndex\":8},{\"State\":\"Himachal Pradesh\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":7.2,\"Moisture_Level\":\"Low\",\"temperature\":\"21-27°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Spring\",\"rowIndex\":9},{\"State\":\"Meghalaya\",\"Soil_Type\":\"Mountain Soil\",\"pH_Value\":7.7,\"Moisture_Level\":\"High\",\"temperature\":\"18-27°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Summer\",\"rowIndex\":10},{\"State\":\"Karnataka\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":5.8,\"Moisture_Level\":\"High\",\"temperature\":\"24-31°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Autumn\",\"rowIndex\":11},{\"State\":\"Assam\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":5.7,\"Moisture_Level\":\"Medium\",\"temperature\":\"27-36°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Winter\",\"rowIndex\":12},{\"State\":\"Meghalaya\",\"Soil_Type\":\"Laterite\",\"pH_Value\":6.1,\"Moisture_Level\":\"Low\",\"temperature\":\"25-30°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Spring\",\"rowIndex\":13},{\"State\":\"Bihar\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":8.4,\"Moisture_Level\":\"Medium\",\"temperature\":\"27-34°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Summer\",\"rowIndex\":14},{\"State\":\"West Bengal\",\"Soil_Type\":\"Laterite\",\"pH_Value\":8.3,\"Moisture_Level\":\"High\",\"temperature\":\"26-36°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Autumn\",\"rowIndex\":15},{\"State\":\"Mizoram\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":6.4,\"Moisture_Level\":\"High\",\"temperature\":\"28-36°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Winter\",\"rowIndex\":16},{\"State\":\"Haryana\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":7.3,\"Moisture_Level\":\"Medium\",\"temperature\":\"18-28°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Spring\",\"rowIndex\":17},{\"State\":\"Telangana\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":8.3,\"Moisture_Level\":\"High\",\"temperature\":\"24-29°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Summer\",\"rowIndex\":18},{\"State\":\"Sikkim\",\"Soil_Type\":\"Laterite\",\"pH_Value\":6.0,\"Moisture_Level\":\"High\",\"temperature\":\"28-33°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Autumn\",\"rowIndex\":19},{\"State\":\"Maharashtra\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":7.6,\"Moisture_Level\":\"High\",\"temperature\":\"22-31°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Winter\",\"rowIndex\":20},{\"State\":\"Tamil Nadu\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":5.8,\"Moisture_Level\":\"High\",\"temperature\":\"21-29°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Spring\",\"rowIndex\":21},{\"State\":\"Mizoram\",\"Soil_Type\":\"Mountain Soil\",\"pH_Value\":5.9,\"Moisture_Level\":\"Medium\",\"temperature\":\"26-34°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Summer\",\"rowIndex\":22},{\"State\":\"Haryana\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":7.5,\"Moisture_Level\":\"Low\",\"temperature\":\"25-35°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Autumn\",\"rowIndex\":23},{\"State\":\"Kerala\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":8.5,\"Moisture_Level\":\"High\",\"temperature\":\"27-37°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":24},{\"State\":\"Gujarat\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":8.4,\"Moisture_Level\":\"Low\",\"temperature\":\"25-30°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Spring\",\"rowIndex\":25},{\"State\":\"Jharkhand\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":6.9,\"Moisture_Level\":\"Medium\",\"temperature\":\"27-34°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Summer\",\"rowIndex\":26},{\"State\":\"Maharashtra\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":8.1,\"Moisture_Level\":\"Low\",\"temperature\":\"16-26°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Autumn\",\"rowIndex\":27},{\"State\":\"Madhya Pradesh\",\"Soil_Type\":\"Laterite\",\"pH_Value\":6.3,\"Moisture_Level\":\"Low\",\"temperature\":\"28-34°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":28},{\"State\":\"Haryana\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":7.2,\"Moisture_Level\":\"Low\",\"temperature\":\"19-25°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Spring\",\"rowIndex\":29},{\"State\":\"Maharashtra\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":8.1,\"Moisture_Level\":\"High\",\"temperature\":\"20-26°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Summer\",\"rowIndex\":30},{\"State\":\"Jharkhand\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":8.1,\"Moisture_Level\":\"Medium\",\"temperature\":\"23-33°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Autumn\",\"rowIndex\":31},{\"State\":\"Assam\",\"Soil_Type\":\"Laterite\",\"pH_Value\":5.9,\"Moisture_Level\":\"Medium\",\"temperature\":\"23-29°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":32},{\"State\":\"Gujarat\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":7.3,\"Moisture_Level\":\"High\",\"temperature\":\"28-38°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Spring\",\"rowIndex\":33},{\"State\":\"Maharashtra\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":7.5,\"Moisture_Level\":\"High\",\"temperature\":\"15-25°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Summer\",\"rowIndex\":34},{\"State\":\"Punjab\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":8.3,\"Moisture_Level\":\"Medium\",\"temperature\":\"23-32°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Autumn\",\"rowIndex\":35},{\"State\":\"Odisha\",\"Soil_Type\":\"Mountain Soil\",\"pH_Value\":7.7,\"Moisture_Level\":\"High\",\"temperature\":\"27-37°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Winter\",\"rowIndex\":36},{\"State\":\"Manipur\",\"Soil_Type\":\"Mountain Soil\",\"pH_Value\":7.1,\"Moisture_Level\":\"High\",\"temperature\":\"17-23°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Spring\",\"rowIndex\":37},{\"State\":\"Manipur\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":6.8,\"Moisture_Level\":\"Medium\",\"temperature\":\"20-25°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Summer\",\"rowIndex\":38},{\"State\":\"Mizoram\",\"Soil_Type\":\"Mountain Soil\",\"pH_Value\":7.7,\"Moisture_Level\":\"High\",\"temperature\":\"18-25°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Autumn\",\"rowIndex\":39},{\"State\":\"Uttar Pradesh\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":5.5,\"Moisture_Level\":\"Medium\",\"temperature\":\"26-31°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":40},{\"State\":\"Karnataka\",\"Soil_Type\":\"Mountain Soil\",\"pH_Value\":7.1,\"Moisture_Level\":\"Medium\",\"temperature\":\"22-27°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Spring\",\"rowIndex\":41},{\"State\":\"Sikkim\",\"Soil_Type\":\"Laterite\",\"pH_Value\":7.4,\"Moisture_Level\":\"Medium\",\"temperature\":\"28-33°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Summer\",\"rowIndex\":42},{\"State\":\"Arunachal Pradesh\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":6.2,\"Moisture_Level\":\"Medium\",\"temperature\":\"21-31°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Autumn\",\"rowIndex\":43},{\"State\":\"Bihar\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":8.1,\"Moisture_Level\":\"Medium\",\"temperature\":\"18-25°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":44},{\"State\":\"Kerala\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":6.9,\"Moisture_Level\":\"High\",\"temperature\":\"26-35°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Spring\",\"rowIndex\":45},{\"State\":\"Nagaland\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":8.0,\"Moisture_Level\":\"Low\",\"temperature\":\"18-23°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Summer\",\"rowIndex\":46},{\"State\":\"Himachal Pradesh\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":7.1,\"Moisture_Level\":\"Low\",\"temperature\":\"22-27°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Autumn\",\"rowIndex\":47},{\"State\":\"Jharkhand\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":8.3,\"Moisture_Level\":\"High\",\"temperature\":\"20-28°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Winter\",\"rowIndex\":48},{\"State\":\"Madhya Pradesh\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":7.9,\"Moisture_Level\":\"High\",\"temperature\":\"21-29°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Spring\",\"rowIndex\":49},{\"State\":\"Odisha\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":7.6,\"Moisture_Level\":\"High\",\"temperature\":\"26-36°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Summer\",\"rowIndex\":50},{\"State\":\"Meghalaya\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":7.6,\"Moisture_Level\":\"Low\",\"temperature\":\"27-34°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Autumn\",\"rowIndex\":51},{\"State\":\"Arunachal Pradesh\",\"Soil_Type\":\"Laterite\",\"pH_Value\":8.1,\"Moisture_Level\":\"High\",\"temperature\":\"28-33°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Winter\",\"rowIndex\":52},{\"State\":\"Arunachal Pradesh\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":8.4,\"Moisture_Level\":\"High\",\"temperature\":\"21-27°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Spring\",\"rowIndex\":53},{\"State\":\"Jharkhand\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":8.2,\"Moisture_Level\":\"High\",\"temperature\":\"27-37°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Summer\",\"rowIndex\":54},{\"State\":\"Kerala\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":6.3,\"Moisture_Level\":\"High\",\"temperature\":\"21-28°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Autumn\",\"rowIndex\":55},{\"State\":\"Kerala\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":5.9,\"Moisture_Level\":\"Medium\",\"temperature\":\"20-27°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":56},{\"State\":\"Punjab\",\"Soil_Type\":\"Laterite\",\"pH_Value\":5.5,\"Moisture_Level\":\"Low\",\"temperature\":\"21-28°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Spring\",\"rowIndex\":57},{\"State\":\"Maharashtra\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":8.1,\"Moisture_Level\":\"Low\",\"temperature\":\"27-37°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Summer\",\"rowIndex\":58},{\"State\":\"Odisha\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":5.5,\"Moisture_Level\":\"Medium\",\"temperature\":\"15-21°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Autumn\",\"rowIndex\":59},{\"State\":\"Rajasthan\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":8.1,\"Moisture_Level\":\"High\",\"temperature\":\"20-29°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":60},{\"State\":\"Mizoram\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":8.3,\"Moisture_Level\":\"Medium\",\"temperature\":\"27-32°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Spring\",\"rowIndex\":61},{\"State\":\"Gujarat\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":8.5,\"Moisture_Level\":\"Low\",\"temperature\":\"22-32°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Summer\",\"rowIndex\":62},{\"State\":\"Uttarakhand\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":7.2,\"Moisture_Level\":\"Medium\",\"temperature\":\"17-24°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Autumn\",\"rowIndex\":63},{\"State\":\"Andhra Pradesh\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":6.3,\"Moisture_Level\":\"Low\",\"temperature\":\"25-31°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Winter\",\"rowIndex\":64},{\"State\":\"Maharashtra\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":6.8,\"Moisture_Level\":\"Low\",\"temperature\":\"15-21°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Spring\",\"rowIndex\":65},{\"State\":\"Gujarat\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":8.4,\"Moisture_Level\":\"Medium\",\"temperature\":\"18-24°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Summer\",\"rowIndex\":66},{\"State\":\"Nagaland\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":7.5,\"Moisture_Level\":\"Low\",\"temperature\":\"18-23°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Autumn\",\"rowIndex\":67},{\"State\":\"Kerala\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":5.6,\"Moisture_Level\":\"High\",\"temperature\":\"19-28°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Winter\",\"rowIndex\":68},{\"State\":\"Karnataka\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":7.1,\"Moisture_Level\":\"Low\",\"temperature\":\"19-27°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Spring\",\"rowIndex\":69},{\"State\":\"Odisha\",\"Soil_Type\":\"Mountain Soil\",\"pH_Value\":8.5,\"Moisture_Level\":\"High\",\"temperature\":\"19-24°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Summer\",\"rowIndex\":70},{\"State\":\"Haryana\",\"Soil_Type\":\"Laterite\",\"pH_Value\":6.1,\"Moisture_Level\":\"Medium\",\"temperature\":\"20-28°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Autumn\",\"rowIndex\":71},{\"State\":\"Goa\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":8.1,\"Moisture_Level\":\"Medium\",\"temperature\":\"18-25°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Winter\",\"rowIndex\":72},{\"State\":\"Arunachal Pradesh\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":6.0,\"Moisture_Level\":\"Medium\",\"temperature\":\"22-28°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Spring\",\"rowIndex\":73},{\"State\":\"Bihar\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":6.2,\"Moisture_Level\":\"Low\",\"temperature\":\"20-30°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Summer\",\"rowIndex\":74},{\"State\":\"Himachal Pradesh\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":8.1,\"Moisture_Level\":\"Medium\",\"temperature\":\"25-31°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Autumn\",\"rowIndex\":75},{\"State\":\"Telangana\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":8.0,\"Moisture_Level\":\"Low\",\"temperature\":\"16-24°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Winter\",\"rowIndex\":76},{\"State\":\"Manipur\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":7.4,\"Moisture_Level\":\"Medium\",\"temperature\":\"18-24°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Spring\",\"rowIndex\":77},{\"State\":\"Mizoram\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":6.6,\"Moisture_Level\":\"High\",\"temperature\":\"17-27°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Summer\",\"rowIndex\":78},{\"State\":\"Assam\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":6.6,\"Moisture_Level\":\"High\",\"temperature\":\"22-27°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Autumn\",\"rowIndex\":79},{\"State\":\"Nagaland\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":8.3,\"Moisture_Level\":\"Medium\",\"temperature\":\"18-24°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":80},{\"State\":\"Andhra Pradesh\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":6.1,\"Moisture_Level\":\"Low\",\"temperature\":\"21-29°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Spring\",\"rowIndex\":81},{\"State\":\"Assam\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":7.5,\"Moisture_Level\":\"Low\",\"temperature\":\"27-34°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Summer\",\"rowIndex\":82},{\"State\":\"Meghalaya\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":6.8,\"Moisture_Level\":\"High\",\"temperature\":\"28-34°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Autumn\",\"rowIndex\":83},{\"State\":\"Karnataka\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":7.4,\"Moisture_Level\":\"Medium\",\"temperature\":\"16-26°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Winter\",\"rowIndex\":84},{\"State\":\"Uttarakhand\",\"Soil_Type\":\"Laterite\",\"pH_Value\":6.6,\"Moisture_Level\":\"High\",\"temperature\":\"20-29°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Spring\",\"rowIndex\":85},{\"State\":\"Odisha\",\"Soil_Type\":\"Laterite\",\"pH_Value\":8.0,\"Moisture_Level\":\"High\",\"temperature\":\"27-35°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Summer\",\"rowIndex\":86},{\"State\":\"Mizoram\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":6.9,\"Moisture_Level\":\"High\",\"temperature\":\"27-35°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Autumn\",\"rowIndex\":87},{\"State\":\"Madhya Pradesh\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":7.8,\"Moisture_Level\":\"Low\",\"temperature\":\"19-25°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":88},{\"State\":\"Maharashtra\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":7.1,\"Moisture_Level\":\"High\",\"temperature\":\"22-30°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Spring\",\"rowIndex\":89},{\"State\":\"Meghalaya\",\"Soil_Type\":\"Mountain Soil\",\"pH_Value\":6.7,\"Moisture_Level\":\"Low\",\"temperature\":\"27-34°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Summer\",\"rowIndex\":90},{\"State\":\"Jharkhand\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":5.7,\"Moisture_Level\":\"Medium\",\"temperature\":\"22-28°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Autumn\",\"rowIndex\":91},{\"State\":\"West Bengal\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":5.8,\"Moisture_Level\":\"High\",\"temperature\":\"23-33°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Winter\",\"rowIndex\":92},{\"State\":\"Tamil Nadu\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":8.0,\"Moisture_Level\":\"Low\",\"temperature\":\"15-24°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Spring\",\"rowIndex\":93},{\"State\":\"Himachal Pradesh\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":5.6,\"Moisture_Level\":\"High\",\"temperature\":\"21-28°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Summer\",\"rowIndex\":94},{\"State\":\"Andhra Pradesh\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":8.1,\"Moisture_Level\":\"Medium\",\"temperature\":\"23-29°C\",\"Sunlight_Level\":\"High\",\"Season\":\"Autumn\",\"rowIndex\":95},{\"State\":\"Nagaland\",\"Soil_Type\":\"Black Cotton\",\"pH_Value\":6.3,\"Moisture_Level\":\"Medium\",\"temperature\":\"26-31°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Winter\",\"rowIndex\":96},{\"State\":\"Kerala\",\"Soil_Type\":\"Red Soil\",\"pH_Value\":6.3,\"Moisture_Level\":\"Low\",\"temperature\":\"28-38°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Spring\",\"rowIndex\":97},{\"State\":\"Himachal Pradesh\",\"Soil_Type\":\"Alluvial\",\"pH_Value\":6.3,\"Moisture_Level\":\"Low\",\"temperature\":\"22-27°C\",\"Sunlight_Level\":\"Moderate\",\"Season\":\"Summer\",\"rowIndex\":98},{\"State\":\"Meghalaya\",\"Soil_Type\":\"Desert Soil\",\"pH_Value\":7.0,\"Moisture_Level\":\"High\",\"temperature\":\"24-30°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Autumn\",\"rowIndex\":99},{\"State\":\"Gujarat\",\"Soil_Type\":\"Saline Soil\",\"pH_Value\":8.3,\"Moisture_Level\":\"Low\",\"temperature\":\"27-35°C\",\"Sunlight_Level\":\"Low\",\"Season\":\"Winter\",\"rowIndex\":100}]"));}}),
"[project]/src/app/sensor-analysis/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SensorAnalysisPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$translation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-translation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sensor$2d$data$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sensor-data-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crop$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/crop-data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const texts = {
    title: "Live Sensor Analysis",
    description: "Real-time sensor data from across various regions. Click 'Analyze Data' to get AI-powered insights for the current record, or 'Next Record' to cycle through the data.",
    nextRecord: "Next Record"
};
function SensorAnalysisPage() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$translation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(texts);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleNextRecord = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crop$2d$data$2e$json__$28$json$29$__["default"].length);
    };
    const currentData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crop$2d$data$2e$json__$28$json$29$__["default"][currentIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto py-8 px-4 md:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeaderHeading"], {
                        className: "font-headline",
                        children: t('title')
                    }, void 0, false, {
                        fileName: "[project]/src/app/sensor-analysis/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeaderDescription"], {
                        children: t('description')
                    }, void 0, false, {
                        fileName: "[project]/src/app/sensor-analysis/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sensor-analysis/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sensor$2d$data$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SensorDataCard"], {
                    data: currentData
                }, currentIndex, false, {
                    fileName: "[project]/src/app/sensor-analysis/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/sensor-analysis/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleNextRecord,
                    children: [
                        t('nextRecord'),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "ml-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/sensor-analysis/page.tsx",
                            lineNumber: 40,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sensor-analysis/page.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/sensor-analysis/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/sensor-analysis/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(SensorAnalysisPage, "+BvMlAEG4eUt+PP9uoJwE+Z4T2s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$translation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = SensorAnalysisPage;
var _c;
__turbopack_context__.k.register(_c, "SensorAnalysisPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_34b74bb7._.js.map