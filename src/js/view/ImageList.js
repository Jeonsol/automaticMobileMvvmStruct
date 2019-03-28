const DEFAULT_TEMPLATE = ({id = '', thumb = ''}, index) =>
    `<li data-item><a href="javascript:void(0)" data-index="${index}"><span class="border"></span><img src="${thumb}" alt="${id}" width="92" height="60" data-item-thumb></a></li>`;


export default class ImageList {

};
