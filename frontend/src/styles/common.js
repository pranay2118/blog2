// src/styles/common.js
// Theme: Modern Slate & Indigo

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-slate-50 min-h-screen"
export const pageWrapper    = "max-w-5xl mx-auto px-6 py-16"
export const section        = "mb-14"

// ─── Cards ────────────────────────────────────────────
export const cardClass      = "bg-white border border-slate-200 shadow-sm rounded-2xl p-7 hover:shadow-md transition-all duration-200 cursor-pointer"

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-5xl font-extrabold text-slate-900 tracking-tight mb-2"
export const headingClass   = "text-2xl font-bold text-slate-900 tracking-tight"
export const subHeadingClass= "text-lg font-semibold text-slate-900 tracking-tight"
export const bodyText       = "text-slate-600 leading-relaxed"
export const mutedText      = "text-sm text-slate-500"
export const linkClass      = "text-indigo-600 hover:text-indigo-800 transition-colors"

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn     = "bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer text-sm"
export const secondaryBtn   = "bg-white border border-slate-300 text-slate-700 font-medium px-5 py-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer text-sm"
export const ghostBtn       = "text-indigo-600 font-medium hover:text-indigo-800 transition-colors cursor-pointer text-sm"

// ─── Forms ────────────────────────────────────────────
export const formCard       = "bg-white border border-slate-200 shadow-sm rounded-2xl p-10 max-w-md mx-auto"
export const formTitle      = "text-2xl font-bold text-slate-900 tracking-tight text-center mb-7"
export const labelClass     = "text-sm font-medium text-slate-700 mb-1.5 block"
export const inputClass     = "w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
export const formGroup      = "mb-4"
export const submitBtn      = "w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer mt-2 text-sm"

// ─── Navbar ───────────────────────────────────────────
export const navbarClass        = "bg-white/90 backdrop-blur-md border-b border-slate-200 px-8 h-16 flex items-center sticky top-0 z-50 shadow-sm"
export const navContainerClass  = "max-w-5xl mx-auto w-full flex items-center justify-between"
export const navBrandClass      = "text-xl font-bold text-slate-900 tracking-tight"
export const navLinksClass      = "flex items-center gap-7"
export const navLinkClass       = "text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
export const navLinkActiveClass = "text-sm text-indigo-600 font-semibold"

// ─── Article / Blog ───────────────────────────────────
export const articleGrid        = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
export const articleCardClass   = "bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition-all duration-300 flex flex-col gap-3 cursor-pointer shadow-sm"
export const articleTitle       = "text-lg font-bold text-slate-900 leading-snug"
export const articleExcerpt     = "text-sm text-slate-600 leading-relaxed"
export const articleMeta        = "text-xs text-slate-500"
export const articleBody        = "text-slate-700 leading-relaxed text-base max-w-2xl"
export const timestampClass     = "text-xs text-slate-500 flex items-center gap-1.5"
export const tagClass           = "text-xs font-semibold text-indigo-600 uppercase tracking-wider w-fit bg-indigo-50 px-2 py-1 rounded-md"

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper = "max-w-3xl mx-auto px-6 py-14"
export const articleHeader = "mb-10 flex flex-col gap-4"
export const articleCategory = "text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit"
export const articleMainTitle = "text-4xl font-extrabold text-slate-900 leading-tight"
export const articleAuthorRow = "flex items-center justify-between border-t border-b border-slate-200 py-4 text-sm text-slate-600"
export const authorInfo = "flex items-center gap-2 font-semibold text-slate-900"
export const articleContent = "text-slate-800 leading-loose text-lg whitespace-pre-line mt-8 font-serif"
export const articleFooter = "border-t border-slate-200 mt-12 pt-6 text-sm text-slate-500"

// ─── Article Actions ─────────────────────────────
export const articleActions = "flex gap-3 mt-6"
export const editBtn = "bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
export const deleteBtn = "bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-700 transition"

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive = "absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700"
export const articleStatusDeleted = "absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-red-100 text-red-700"

// ─── Feedback ─────────────────────────────────────────
export const errorClass         = "bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 text-sm"
export const successClass       = "bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg px-4 py-3 text-sm"
export const loadingClass       = "text-indigo-600 text-sm animate-pulse text-center py-10"
export const emptyStateClass    = "text-center text-slate-500 py-16 text-sm"

// ─── Divider ──────────────────────────────────────────
export const divider            = "border-t border-slate-200 my-10"