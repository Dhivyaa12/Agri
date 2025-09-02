module.exports = {

"[externals]/genkit [external] (genkit, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("genkit");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@genkit-ai/googleai [external] (@genkit-ai/googleai, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@genkit-ai/googleai");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/ai/genkit.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "ai": (()=>ai)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/genkit [external] (genkit, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$genkit$2d$ai$2f$googleai__$5b$external$5d$__$2840$genkit$2d$ai$2f$googleai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@genkit-ai/googleai [external] (@genkit-ai/googleai, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$genkit$2d$ai$2f$googleai__$5b$external$5d$__$2840$genkit$2d$ai$2f$googleai$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$genkit$2d$ai$2f$googleai__$5b$external$5d$__$2840$genkit$2d$ai$2f$googleai$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const ai = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["genkit"])({
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$genkit$2d$ai$2f$googleai__$5b$external$5d$__$2840$genkit$2d$ai$2f$googleai$2c$__esm_import$29$__["googleAI"])()
    ],
    model: 'googleai/gemini-2.0-flash'
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"402578704a0068c0448430b72144adf3acc23f7769":"translateText"},"",""] */ __turbopack_context__.s({
    "translateText": (()=>translateText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview A text translation flow using Genkit and Google AI.
 * 
 * - translateText - Translates text to a specified target language.
 * - TranslateTextInput - The input type for the translateText function.
 * - TranslateTextOutput - The return type for the translateText function.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/genkit [external] (genkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const TranslateTextInputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    text: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The text to be translated. This may contain multiple lines separated by "\\n---\\n".'),
    targetLanguage: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The target language for translation (e.g., "hi", "ta").')
});
const TranslateTextOutputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    translatedText: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The translated text, preserving the "\\n---\\n" separators.')
});
async function translateText(input) {
    return translateTextFlow(input);
}
const translateTextFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'translateTextFlow',
    inputSchema: TranslateTextInputSchema,
    outputSchema: TranslateTextOutputSchema
}, async ({ text, targetLanguage })=>{
    // Handle cases where the text might be empty or just separators
    if (!text.trim() || text.trim() === '---') {
        return {
            translatedText: text
        };
    }
    const { text: translatedText } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].generate({
        model: 'googleai/gemini-2.0-flash',
        prompt: `Translate the following text to the language with code '${targetLanguage}'. The text may contain multiple distinct entries separated by "\\n---\\n". Maintain this separator in your output. Return only the translated text, preserving the separators exactly as they appear in the input.\n\nText to translate: "${text}"`
    });
    return {
        translatedText
    };
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    translateText
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(translateText, "402578704a0068c0448430b72144adf3acc23f7769", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"406e1de68e2f9ef3e4e2c9b36da445e597bf8558ad":"diagnoseCrop"},"",""] */ __turbopack_context__.s({
    "diagnoseCrop": (()=>diagnoseCrop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview A crop disease diagnosis AI agent.
 *
 * - diagnoseCrop - A function that handles the crop diagnosis process.
 * - DiagnoseCropInput - The input type for the diagnoseCrop function.
 * - DiagnoseCropOutput - The return type for the diagnoseCrop function.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/genkit [external] (genkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const DiagnoseCropInputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    photoDataUri: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe("A photo of the crop, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
    description: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().optional().describe('An optional description of the crop issue.')
});
const DiagnoseCropOutputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    diseaseName: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The name of the identified disease.'),
    possibleCauses: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('Possible causes of the disease.'),
    recommendedRemedies: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('AI-recommended remedies for the disease.'),
    preventiveMeasures: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('Preventive measures to avoid the disease in the future.')
});
async function diagnoseCrop(input) {
    return diagnoseCropFlow(input);
}
const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].definePrompt({
    name: 'diagnoseCropPrompt',
    input: {
        schema: DiagnoseCropInputSchema
    },
    output: {
        schema: DiagnoseCropOutputSchema
    },
    prompt: `You are an expert in diagnosing crop diseases. Analyze the provided information to identify the disease, its possible causes, recommend remedies, and suggest preventive measures.

{{#if description}}Description: {{{description}}}{{/if}}
Photo: {{media url=photoDataUri}}

If no description is provided, rely solely on the image for your analysis.`
});
const diagnoseCropFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'diagnoseCropFlow',
    inputSchema: DiagnoseCropInputSchema,
    outputSchema: DiagnoseCropOutputSchema
}, async (input)=>{
    const { output } = await prompt(input);
    return output;
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    diagnoseCrop
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(diagnoseCrop, "406e1de68e2f9ef3e4e2c9b36da445e597bf8558ad", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"40e37f7155e0bdf442d0c48b77ee9f28f61a70f186":"textToSpeech"},"",""] */ __turbopack_context__.s({
    "textToSpeech": (()=>textToSpeech)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview A text-to-speech (TTS) flow using Genkit and Google AI.
 * 
 * - textToSpeech - Converts a string of text into speech audio.
 * - TextToSpeechInput - The input type for the textToSpeech function.
 * - TextToSpeechOutput - The return type for the textToSpeech function.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$genkit$2d$ai$2f$googleai__$5b$external$5d$__$2840$genkit$2d$ai$2f$googleai$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@genkit-ai/googleai [external] (@genkit-ai/googleai, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/genkit [external] (genkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wav$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/wav/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$genkit$2d$ai$2f$googleai__$5b$external$5d$__$2840$genkit$2d$ai$2f$googleai$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$genkit$2d$ai$2f$googleai__$5b$external$5d$__$2840$genkit$2d$ai$2f$googleai$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
const TextToSpeechInputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    text: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The text to be converted to speech.'),
    language: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().optional().describe('The language to use for the speech, e.g., "en", "ta".')
});
const TextToSpeechOutputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    audioDataUri: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe("The generated audio as a data URI. Expected format: 'data:audio/wav;base64,<encoded_data>'.")
});
async function textToSpeech(input) {
    return textToSpeechFlow(input);
}
const getVoiceForLanguage = (language)=>{
    switch(language){
        case 'ta':
            return 'Achernar';
        case 'hi':
            return 'Achird';
        case 'te':
            return 'Alnilam';
        case 'kn':
            return 'Erinome';
        case 'ml':
            return 'Gacrux';
        case 'en':
        default:
            return 'Algenib';
    }
};
const textToSpeechFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'textToSpeechFlow',
    inputSchema: TextToSpeechInputSchema,
    outputSchema: TextToSpeechOutputSchema
}, async ({ text, language })=>{
    const voiceName = getVoiceForLanguage(language);
    let textToSpeak = text;
    if (language && language !== 'en') {
        const translationResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateText"])({
            text,
            targetLanguage: language
        });
        textToSpeak = translationResponse.translatedText;
    }
    const { media } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].generate({
        model: __TURBOPACK__imported__module__$5b$externals$5d2f40$genkit$2d$ai$2f$googleai__$5b$external$5d$__$2840$genkit$2d$ai$2f$googleai$2c$__esm_import$29$__["googleAI"].model('gemini-2.5-flash-preview-tts'),
        config: {
            responseModalities: [
                'AUDIO'
            ],
            speechConfig: {
                voiceConfig: {
                    prebuiltVoiceConfig: {
                        voiceName
                    }
                }
            }
        },
        prompt: textToSpeak
    });
    if (!media) {
        throw new Error('No audio media was generated.');
    }
    const audioBuffer = Buffer.from(media.url.substring(media.url.indexOf(',') + 1), 'base64');
    const wavData = await toWav(audioBuffer);
    return {
        audioDataUri: 'data:audio/wav;base64,' + wavData
    };
});
async function toWav(pcmData, channels = 1, rate = 24000, sampleWidth = 2) {
    return new Promise((resolve, reject)=>{
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$wav$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Writer({
            channels,
            sampleRate: rate,
            bitDepth: sampleWidth * 8
        });
        const bufs = [];
        writer.on('error', reject);
        writer.on('data', (chunk)=>{
            bufs.push(chunk);
        });
        writer.on('end', ()=>{
            resolve(Buffer.concat(bufs).toString('base64'));
        });
        writer.write(pcmData);
        writer.end();
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    textToSpeech
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(textToSpeech, "40e37f7155e0bdf442d0c48b77ee9f28f61a70f186", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"4032f1b03923a55598788ff50d25ed88cf179615f1":"speechToText"},"",""] */ __turbopack_context__.s({
    "speechToText": (()=>speechToText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview A speech-to-text (STT) flow using Genkit and Google AI.
 *
 * - speechToText - Converts speech audio into text.
 * - SpeechToTextInput - The input type for the speechToText function.
 * - SpeechToTextOutput - The return type for the speechToText function.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/genkit [external] (genkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const SpeechToTextInputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    audioDataUri: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe("The speech audio as a data URI. Expected format: 'data:audio/wav;base64,<encoded_data>'."),
    language: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().optional().describe('The BCP-47 language code for transcription (e.g., "en-US", "hi-IN").')
});
const SpeechToTextOutputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    text: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The transcribed text.')
});
async function speechToText(input) {
    return speechToTextFlow(input);
}
const speechToTextFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'speechToTextFlow',
    inputSchema: SpeechToTextInputSchema,
    outputSchema: SpeechToTextOutputSchema
}, async ({ audioDataUri, language })=>{
    const languagePrompt = language ? ` The user is speaking in ${language}. Transcribe it accurately in that language.` : '';
    const { text } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].generate({
        model: 'googleai/gemini-2.0-flash',
        prompt: [
            {
                media: {
                    url: audioDataUri
                }
            },
            {
                text: `Transcribe the following audio accurately. The audio contains a description of crop symptoms for agricultural diagnosis.${languagePrompt}`
            }
        ]
    });
    return {
        text
    };
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    speechToText
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(speechToText, "4032f1b03923a55598788ff50d25ed88cf179615f1", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/crop-diagnosis/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/crop-diagnosis/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/crop-diagnosis/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/crop-diagnosis/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "402578704a0068c0448430b72144adf3acc23f7769": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateText"]),
    "4032f1b03923a55598788ff50d25ed88cf179615f1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["speechToText"]),
    "406e1de68e2f9ef3e4e2c9b36da445e597bf8558ad": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["diagnoseCrop"]),
    "40e37f7155e0bdf442d0c48b77ee9f28f61a70f186": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["textToSpeech"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/crop-diagnosis/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/crop-diagnosis/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "402578704a0068c0448430b72144adf3acc23f7769": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["402578704a0068c0448430b72144adf3acc23f7769"]),
    "4032f1b03923a55598788ff50d25ed88cf179615f1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4032f1b03923a55598788ff50d25ed88cf179615f1"]),
    "406e1de68e2f9ef3e4e2c9b36da445e597bf8558ad": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["406e1de68e2f9ef3e4e2c9b36da445e597bf8558ad"]),
    "40e37f7155e0bdf442d0c48b77ee9f28f61a70f186": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e37f7155e0bdf442d0c48b77ee9f28f61a70f186"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/crop-diagnosis/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/crop-diagnosis/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/crop-diagnosis.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/text-to-speech.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/ai/flows/speech-to-text.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$crop$2d$diagnosis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$diagnosis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$speech$2d$to$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/crop-diagnosis/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/crop-diagnosis/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/crop-diagnosis/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/crop-diagnosis/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/crop-diagnosis/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/crop-diagnosis/page.tsx", "default");
}}),
"[project]/src/app/crop-diagnosis/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$crop$2d$diagnosis$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/crop-diagnosis/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$crop$2d$diagnosis$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/crop-diagnosis/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$crop$2d$diagnosis$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/crop-diagnosis/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/crop-diagnosis/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f0b48613._.js.map