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
"[project]/src/ai/flows/crop-recommendation.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"40e555da5c9d18197e46e320d0c55fee566dd3a360":"recommendBestCrops"},"",""] */ __turbopack_context__.s({
    "recommendBestCrops": (()=>recommendBestCrops)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview This file contains the Genkit flow for recommending the best crops to plant based on soil and location information.
 *
 * - recommendBestCrops - A function that handles the crop recommendation process.
 * - CropRecommendationInput - The input type for the recommendBestCrops function.
 * - CropRecommendationOutput - The return type for the recommendBestCrops function.
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
const CropRecommendationInputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    soilNature: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The nature of the soil, e.g., sandy, clay, loamy.'),
    weatherConditions: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The current weather conditions, e.g., sunny, rainy, cloudy.'),
    state: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The state in which the farm is located.'),
    phValue: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].number().describe('The pH value of the soil.')
});
const CropRecommendationOutputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    recommendedCrops: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].array(__TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string()).describe('An array of recommended crops based on the input data.'),
    reasons: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].array(__TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string()).describe('Reasons for recommending each crop, e.g., drought resistance, high yield.')
});
async function recommendBestCrops(input) {
    return recommendBestCropsFlow(input);
}
const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].definePrompt({
    name: 'cropRecommendationPrompt',
    input: {
        schema: CropRecommendationInputSchema
    },
    output: {
        schema: CropRecommendationOutputSchema
    },
    prompt: `You are an expert agricultural advisor. Based on the soil nature, pH value, weather conditions, and state provided by the user, recommend the best crops to plant.

Soil Nature: {{{soilNature}}}
Soil pH: {{{phValue}}}
Weather Conditions: {{{weatherConditions}}}
State: {{{state}}}

Crucially, only recommend crops that are suitable for the given soil pH value. Consider the local climate, soil composition, and typical crop yields in the given state. Provide a list of recommended crops and a brief explanation for each recommendation, explicitly mentioning why it's suitable for the pH level.

Output the data as JSON in the following format:
\n{\n  "recommendedCrops": ["crop1", "crop2", ...],\n  "reasons": ["reason1", "reason2", ...]
}`
});
const recommendBestCropsFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'recommendBestCropsFlow',
    inputSchema: CropRecommendationInputSchema,
    outputSchema: CropRecommendationOutputSchema
}, async (input)=>{
    const { output } = await prompt(input);
    return output;
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    recommendBestCrops
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(recommendBestCrops, "40e555da5c9d18197e46e320d0c55fee566dd3a360", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/ai/flows/government-scheme-recommendation.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"403e3f83ec63b15020e5d99d349365356a72cf486d":"recommendGovSchemes"},"",""] */ __turbopack_context__.s({
    "recommendGovSchemes": (()=>recommendGovSchemes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview A government scheme recommendation AI agent.
 *
 * - recommendGovSchemes - A function that handles the scheme recommendation process.
 * - RecommendGovSchemesInput - The input type for the recommendGovSchemes function.
 * - RecommendGovSchemesOutput - The return type for the recommendGovSchemes function.
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
const SchemeSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The full name of the government scheme.'),
    url: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The official government URL for the scheme.')
});
const RecommendGovSchemesInputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    state: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The state for which to find government schemes.'),
    requirements: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().optional().describe('The requirements of the user, such as women-focused schemes or irrigation support. If not provided, general schemes should be recommended.')
});
const RecommendGovSchemesOutputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    centralSchemes: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].array(SchemeSchema).describe('Relevant Central Government Schemes with their names and URLs.'),
    stateSchemes: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].array(SchemeSchema).describe('Applicable State Government Schemes with their names and URLs.'),
    womenSchemes: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].array(SchemeSchema).describe('Women-specific agricultural schemes with their names and URLs.')
});
async function recommendGovSchemes(input) {
    return recommendGovSchemesFlow(input);
}
const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].definePrompt({
    name: 'recommendGovSchemesPrompt',
    input: {
        schema: RecommendGovSchemesInputSchema
    },
    output: {
        schema: RecommendGovSchemesOutputSchema
    },
    prompt: `You are an expert in Indian government agricultural schemes.

You will use the state and requirements provided to recommend relevant schemes. For each scheme, you MUST provide the official government website URL.

State: {{{state}}}
{{#if requirements}}
Requirements: {{{requirements}}}
{{/if}}

Recommend relevant Central Government Schemes, applicable State Government Schemes, and Women-specific agricultural schemes. If no specific requirements are given, provide a list of general, popular, and impactful schemes for the given state.

Format your output as a JSON object with keys for centralSchemes, stateSchemes, and womenSchemes. Each key should contain an array of objects, with each object having a 'name' and 'url' for the scheme.`
});
const recommendGovSchemesFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'recommendGovSchemesFlow',
    inputSchema: RecommendGovSchemesInputSchema,
    outputSchema: RecommendGovSchemesOutputSchema
}, async (input)=>{
    const { output } = await prompt(input);
    return output;
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    recommendGovSchemes
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(recommendGovSchemes, "403e3f83ec63b15020e5d99d349365356a72cf486d", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"40e41fbb6a33183dd957aafc02adb3547002b3fd39":"analyzeSensorData"},"",""] */ __turbopack_context__.s({
    "analyzeSensorData": (()=>analyzeSensorData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview This file contains the Genkit flow for analyzing sensor data from a farm,
 * and integrating crop and government scheme recommendations.
 *
 * - analyzeSensorData - A function that handles the sensor data analysis process.
 * - SensorAnalysisInput - The input type for the analyzeSensorData function.
 * - SensorAnalysisOutput - The return type for the analyzeSensorData function.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/genkit [external] (genkit, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$recommendation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/crop-recommendation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$government$2d$scheme$2d$recommendation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/government-scheme-recommendation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$recommendation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$government$2d$scheme$2d$recommendation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$recommendation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$government$2d$scheme$2d$recommendation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
const SensorAnalysisInputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    state: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The state where the farm is located.'),
    soilType: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The type of soil (e.g., Laterite, Red Soil, Black Cotton).'),
    phValue: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].number().describe('The pH value of the soil.'),
    moistureLevel: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The moisture level (e.g., Low, Medium, High).'),
    temperature: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].number().describe('The current temperature in Celsius.'),
    sunlightLevel: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The level of sunlight exposure (e.g., Low, Moderate, High).'),
    season: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The current season (e.g., Spring, Summer, Autumn, Winter).')
});
const SchemeSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The full name of the government scheme.'),
    url: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe('The official government URL for the scheme.')
});
const SensorAnalysisOutputSchema = __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
    analysis: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string().describe("A short, summarized analysis of the provided soil and environmental conditions."),
    recommendedCrops: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
        crops: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].array(__TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string()).describe('An array of recommended crops based on the input data.'),
        reasons: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].array(__TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string()).describe('Reasons for recommending each crop.')
    }),
    governmentSchemes: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
        centralSchemes: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].array(SchemeSchema).describe('Relevant Central Government Schemes.'),
        stateSchemes: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].array(SchemeSchema).describe('Applicable State Government Schemes.'),
        womenSchemes: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].array(SchemeSchema).describe('Women-specific agricultural schemes.')
    })
});
async function analyzeSensorData(input) {
    return sensorAnalysisFlow(input);
}
const analysisPrompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].definePrompt({
    name: 'sensorAnalysisPrompt',
    input: {
        schema: SensorAnalysisInputSchema
    },
    output: {
        schema: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].object({
            analysis: __TURBOPACK__imported__module__$5b$externals$5d2f$genkit__$5b$external$5d$__$28$genkit$2c$__esm_import$29$__["z"].string()
        })
    },
    prompt: `You are an expert agricultural scientist. Analyze the following sensor data from a farm and provide a short, summarized analysis of the soil and environmental conditions.

Location and Conditions:
- State: {{{state}}}
- Season: {{{season}}}

Soil Analysis:
- Soil Type: {{{soilType}}}
- pH Value: {{{phValue}}}
- Moisture Level: {{{moistureLevel}}}

Environmental Factors:
- Temperature: {{{temperature}}}°C
- Sunlight Level: {{{sunlightLevel}}}

Provide a brief, one or two sentence summary of the conditions. For example: "The soil is slightly alkaline with high moisture, which is suitable for monsoon crops."`
});
const sensorAnalysisFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'sensorAnalysisFlow',
    inputSchema: SensorAnalysisInputSchema,
    outputSchema: SensorAnalysisOutputSchema
}, async (input)=>{
    // 1. Get soil analysis
    const { output: analysisResult } = await analysisPrompt(input);
    // 2. Get crop recommendations
    const cropRecs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$crop$2d$recommendation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recommendBestCrops"])({
        soilNature: input.soilType,
        phValue: input.phValue,
        weatherConditions: `${input.sunlightLevel} sunlight, ${input.temperature}°C, ${input.season} season.`,
        state: input.state
    });
    // 3. Get government schemes
    const govSchemes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$government$2d$scheme$2d$recommendation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recommendGovSchemes"])({
        state: input.state,
        // Using a general requirement to fetch broad schemes relevant to the analysis
        requirements: `Schemes for a farmer with ${input.soilType} soil, dealing with ${input.moistureLevel} moisture.`
    });
    return {
        analysis: analysisResult.analysis,
        recommendedCrops: {
            crops: cropRecs.recommendedCrops,
            reasons: cropRecs.reasons
        },
        governmentSchemes: {
            centralSchemes: govSchemes.centralSchemes,
            stateSchemes: govSchemes.stateSchemes,
            womenSchemes: govSchemes.womenSchemes
        }
    };
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    analyzeSensorData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(analyzeSensorData, "40e41fbb6a33183dd957aafc02adb3547002b3fd39", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/sensor-analysis/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/sensor-analysis/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/sensor-analysis/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/sensor-analysis/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "402578704a0068c0448430b72144adf3acc23f7769": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateText"]),
    "40e41fbb6a33183dd957aafc02adb3547002b3fd39": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["analyzeSensorData"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/sensor-analysis/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/sensor-analysis/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "402578704a0068c0448430b72144adf3acc23f7769": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["402578704a0068c0448430b72144adf3acc23f7769"]),
    "40e41fbb6a33183dd957aafc02adb3547002b3fd39": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e41fbb6a33183dd957aafc02adb3547002b3fd39"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/sensor-analysis/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/sensor-analysis/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/translate-text.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/sensor-analysis.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$sensor$2d$analysis$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$translate$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$sensor$2d$analysis$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/sensor-analysis/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/sensor-analysis/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/sensor-analysis/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/sensor-analysis/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/sensor-analysis/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/sensor-analysis/page.tsx", "default");
}}),
"[project]/src/app/sensor-analysis/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sensor$2d$analysis$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/sensor-analysis/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sensor$2d$analysis$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/sensor-analysis/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sensor$2d$analysis$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/sensor-analysis/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/sensor-analysis/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3b424749._.js.map