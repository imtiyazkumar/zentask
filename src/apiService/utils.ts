/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

export interface ISearchSortFilter {
    page?: number;
    search?: string;
    start?: string | number;
    end?: string | number;
}

export const apiQueryGenerator = (params?: ISearchSortFilter) => {
    if (!params) return "";

    let queryString = "";

    params.page && (queryString += "&page=" + params.page);
    params.search && (queryString += "&search=" + params.search);
    (params.start || !isNaN(params.start as number)) && (queryString += "&start=" + params.start);
    (params.end || !isNaN(params.end as number)) && (queryString += "&end=" + params.end);

    return queryString ? ("?" + queryString.substring(1)) : "";
};
