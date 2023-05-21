import { Logger } from 'pino'
import { WAMediaUploadFunction, WAUrlInfo } from '../Types'

const THUMBNAIL_WIDTH_PX = 192
export type URLGenerationOptions = {
	thumbnailWidth: number
	timeoutMs: number
	uploadImage?: WAMediaUploadFunction
	logger?: Logger
}

/**
 * Given a piece of text, checks for any URL present, generates link preview for the same and returns it
 * Return undefined if the fetch failed or no URL was found
 * @param text first matched URL in text
 * @param opts
 * @returns the URL info required to generate link preview
 */
export const getUrlInfo = async(
	text: string,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	opts: URLGenerationOptions = {
		thumbnailWidth: THUMBNAIL_WIDTH_PX,
		timeoutMs: 3000
	},
): Promise<WAUrlInfo | undefined> => {
	return undefined
}