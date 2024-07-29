import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeChoiceFields {
    title?: EntryFieldTypes.Symbol;
    destination?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeChoiceSkeleton = EntrySkeletonType<TypeChoiceFields, "choice">;
export type TypeChoice<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeChoiceSkeleton, Modifiers, Locales>;

export function isTypeChoice<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeChoice<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'choice'
}

export type TypeChoiceWithoutLinkResolutionResponse = TypeChoice<"WITHOUT_LINK_RESOLUTION">;
export type TypeChoiceWithoutUnresolvableLinksResponse = TypeChoice<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeChoiceWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeChoice<"WITH_ALL_LOCALES", Locales>;
export type TypeChoiceWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeChoice<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeChoiceWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeChoice<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

export interface TypePageFields {
    title?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.RichText;
    choice?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeChoiceSkeleton>>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'page'
}

export type TypePageWithoutLinkResolutionResponse = TypePage<"WITHOUT_LINK_RESOLUTION">;
export type TypePageWithoutUnresolvableLinksResponse = TypePage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITH_ALL_LOCALES", Locales>;
export type TypePageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

export interface TypeStoryFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    entryPage?: EntryFieldTypes.EntryLink<TypePageSkeleton>;
}

export type TypeStorySkeleton = EntrySkeletonType<TypeStoryFields, "story">;
export type TypeStory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeStorySkeleton, Modifiers, Locales>;

export function isTypeStory<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeStory<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'story'
}

export type TypeStoryWithoutLinkResolutionResponse = TypeStory<"WITHOUT_LINK_RESOLUTION">;
export type TypeStoryWithoutUnresolvableLinksResponse = TypeStory<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeStoryWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeStory<"WITH_ALL_LOCALES", Locales>;
export type TypeStoryWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeStory<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeStoryWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeStory<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
