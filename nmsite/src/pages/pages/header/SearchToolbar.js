import React from 'react'
import * as f from '../../../utils/functions.js'

export function SearchToolbar(props) {
    let p = props.page,
        s = props.store

    if (!f.loadedStyles.WorkPage.controls.search) f.workControls('search')
    if (!f.loadedStyles.WorkPage.controls.input) f.workControls('input')
    if (!f.loadedStyles.WorkPage.Message.search) f.workMessage('search')

    return (
        <div className={'msg-suggest-wrapper msg-suggest-layout ws-flexbox ws-flex-shrink-0 ws-flex-grow-0'} ws-autofocus={'true'} data-name={'nanomagicPage-MainLayout__searchTemplate'} tabIndex={0} style={{width: '300px'}}>
            <div className={'controls-Render js-controls-Render js-controls-Render  controls-Render_background-same controls-Render_textAlign-left controls-Render_searchContrast_borderRadius controls-Render_state-searchContrast-valid controls-fontsize-m controls-fontweight-default controls-fontsize-m controls-fontweight-default controls-Render-fontsize-m controls-text-default  controls-Render_state-searchContrast-valid_caretEmpty  controls-inlineheight-default controls-Render-inlineheight-default controls-search controls_search_theme-default controls-notFocusOnEnter msg-search-custom msg-search-custom_size_default msg-suggest-layout__input msg-suggest-wrapper__input'} ws-autofocus={'true'} fontSize={'m'} maxLength={500} tabIndex={0}>
                <div className={'controls-Render__wrapper'}>
                    <span className={'controls-Render__baseline'}>﻿</span>
                    <div className={'controls_search_theme-default controls-Search__buttons controls-Render__beforeField'} tabIndex={0}>
                        <div className={'msg-search-custom__labels'} tabIndex={0}>
                            <div className={'msg-search-custom__absolute-wrapper ws-flexbox ws-align-items-center'}>
                                <div className={'msg-search-custom__fake-placeholder ws-invisible controls-fontsize-m'}>Найти по тексту или</div>
                                <div className={'msg-search-custom__link-wrapper ws-inline-flexbox ws-align-items-center'}>
                                    <a className={'controls-Label controls-Label_underline_fixed msg-search-custom__link '} tabIndex={-1}>
                                        <div className={'controls-Label__wrapper'}>
                                            <div className={'controls-Label__caption controls-fontsize-m  controls-Label__caption_fontColorStyle-label controls-Label__caption_underline_fixed controls-Label__caption_underline_fixed_edit'}>получателю</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'controls-InputBase__field  controls-Search__field_margin-null controls-Search__field_theme_default_margin-null controls-Render__field controls-Render__field_textAlign_left ws-ellipsis controls-Render__field_zIndex'} data-qa={'controls-Render__field'} tabIndex={0}>
                        <input name={'input-' + (new Date()).getTime()} className={'controls-Field js-controls-Field controls-InputBase__nativeField controls-Search__nativeField_caretEmpty controls-Search__nativeField_caretEmpty_theme_default   controls-InputBase__nativeField_hideCustomPlaceholder'} type={'text'} placeholder={'﻿'} spellCheck={true} autoCorrect={'off'} autoCapitalize={'off'} inputMode={'text'} autoComplete={'off'} tabIndex={0} />
                        <div className={'controls-InputBase__placeholder  controls-InputBase__placeholder_displayed-under-caret'} tabIndex={0}>
                            <div className={'controls-Render__placeholder controls-Render__placeholder_overflow'} tabIndex={0}>Найти по тексту или</div>
                        </div>
                    </div>
                    <div className={'controls_search_theme-default controls-Search__buttons controls-Render__afterField'} tabIndex={0}>
                        <div data-qa={'Search__searchButton'} className={'controls_search_theme-default controls-Search__button controls-Search__button_enabled controls-Search__searchButton controls-Search__searchButton_iconSize-s controls-Search__searchButton-right_inlineheight-default controls-Search__searchButton_position-right controls-Search__searchButton_color icon-Search2'} tabIndex={0} />
                    </div>
                </div>
            </div>
            <div tabIndex={0} />
        </div>
    )
}