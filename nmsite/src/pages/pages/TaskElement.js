import * as f from '../../utils/functions.js'
import { getUserImgUrl } from '../../utils/Request.js'
import Parser from 'html-react-parser'

export function TaskElement(props) {
	let p = props.page,
		s = props.store,
		t = props.task,
		g = s.data.groups,
		sortedUsers = s.users,
		sortedGroups = s.sortedGroups

	function formatDate(date) {
		let data = new Date(date)
		if ((new Date()).getDate() === data.getDate()) {
			return data.toLocaleString('ru-RU', {hour: '2-digit', minute: '2-digit'})
		} else if ((new Date()).getFullYear() === data.getFullYear()) {
			return data.toLocaleString('ru-RU', {day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'})
		} else {
			return data.toLocaleString('ru-RU', {day: '2-digit', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit'})
		}
	}

	if (!f.loadedStyles.WorkPage.controls.checkbox) f.workControls('checkbox')
	if (!f.loadedStyles.WorkPage.person.photo) f.workPersonPhoto()
	if (!f.loadedStyles.WorkPage.controls.itemActions) f.workControls('itemActions')
	if (!f.loadedStyles.WorkPage.edo3core.browserTemplate) f.workEDO3CoreBrowserTemplate()

	function openTaskPopup(event) {
		f.createPopup('EDWS3/Tasks/taskDialog:Dialog', s, p)
	}

	return (
		<div onClick={(event) => openTaskPopup(event)} attr-data-qa={'key-' + t.id} key={t.id} data-qa={'row'} item-key={t.id} className={'controls-ListView__itemV controls-Grid__row controls-Grid__row_default controls-ListView__item_highlightOnHover js-controls-Grid__data-row controls-ListView__itemV_cursor-pointer controls-hover-background-default controls-ListView__item_showActions'} tabIndex={0}>
			<div className={' controls-Grid__row-cell controls-Grid__cell_default js-controls-Grid__row-cell controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null js-controls-ListView__notEditable js-controls-DragScroll__notDraggable controls-GridView__checkbox controls-GridView__checkbox_position-default controls-Grid__row-cell-checkbox controls-Grid__row-cell-checkbox-default controls-GridView__checkbox_relative controls-Grid__row-cell__first-default  controls-hover-background-default controls-Grid__row-cell-background-hover-default '} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
				<div tabIndex={-1} className={'controls_toggle_theme-undefined controls-CheckboxMarker controls-CheckboxMarker_outlined controls-CheckboxMarker_theme-undefined controls-CheckboxMarker__state-false controls-CheckboxMarker__icon-border-color__enabled js-controls-ListView__notEditable controls-List_DragNDrop__notDraggable js-controls-ListView__checkbox js-controls-DragScroll__notDraggable controls-CheckboxMarker_inList controls-ListView__checkbox-onhover controls-Grid__item_background-hover_default controls-hover-background-default controls-GridView__checkbox controls-Grid__border-radius-inherit controls-GridView__checkbox_relative controls-GridView__checkbox_position-default controls-Grid__row-checkboxCell_rowSpacingTop_s controls-Grid__row-cell_rowSpacingBottom_default '} data-qa={'controls-CheckboxMarker'}>
					<svg viewBox={'0 0 12 12'} xmlns={'http://www.w3.org/2000/svg'} className={'controls-CheckboxMarker__icon-checked controls-CheckboxMarker__icon-size-s controls-CheckboxMarker__icon-checked-horizontalPadding-default'} tabIndex={0} data-qa={'controls-CheckboxMarker_state-false'}>
						<path d={'M8 0.5H4C2.067 0.5 0.5 2.067 0.5 4V8C0.5 9.933 2.067 11.5 4 11.5H8C9.933 11.5 11.5 9.933 11.5 8V4C11.5 2.067 9.933 0.5 8 0.5Z'} className={'controls-CheckboxMarker__icon-border_enabled controls-CheckboxMarker__icon-border-state-false'} />
						<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M8 0.5C8 0.22386 7.77614 0 7.5 0H4C1.79086 0 0 1.79086 0 4V8C0 10.2091 1.79086 12 4 12H8C10.2091 12 12 10.2091 12 8V7.5C12 7.22386 11.7761 7 11.5 7C11.2239 7 11 7.22386 11 7.5V8C11 9.6569 9.6569 11 8 11H4C2.34315 11 1 9.6569 1 8V4C1 2.34315 2.34315 1 4 1H7.5C7.77614 1 8 0.77614 8 0.5Z'} clip={'controls-CheckboxMarker__icon-subtract '} />
						<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M11.7609 1.16985C12.0549 1.41657 12.0814 1.84159 11.8201 2.11915L6.43652 8.77431C6.29706 8.92242 6.09549 9.00491 5.88564 8.99977C5.67579 8.99463 5.47903 8.90237 5.34789 8.74764L3.15612 6.16144C2.91036 5.87145 2.96017 5.44831 3.26737 5.21632C3.57456 4.98433 4.02283 5.03134 4.26858 5.32133L5.93279 7.28503L10.7553 1.22569C11.0166 0.948133 11.4669 0.923132 11.7609 1.16985Z'} className={'controls-CheckboxMarker__icon-checked-color_transparent'} />
						<rect x={3} y={3} width={6} height={6} rx={2} className={'controls-CheckboxMarker__state-null__icon-color__transparent'} />
					</svg>
				</div>
			</div>
			<div className={'controls-Grid__row-ladder-cell controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-ColumnScroll__scrollableElement'} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
				<div className={'controls-Grid__row-main_ladderWrapper'}>
					<div className={'controls-StickyBlock  controls-background-transparent  controls-Grid__row-cell__ladder-main_spacing '} style={{zIndex: 2, position: 'relative'}} tabIndex={0} data-stickyblokid={2}>
						<div className={'  js-controls-ListView__notEditable controls-Grid__row-cell__content_baseline_L edws-MainColumn__photo_wrapper controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingRight_null controls-Grid__row-cell_rowSpacingTop_s controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__row-cell__content_ladderHeader controls-Grid__row-ladder-cell__content controls-Grid__row-ladder-cell__content_s'} data-qa={'cell_content'} tabIndex={0}>
							<div className={'edws-MainColumn__photo ws-flex-grow-0 ws-flex-shrink-0'} tabIndex={0}>
								<div className={'person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default controls-Grid__row-cell__ladder-content'} style={{width: '40px', height: '40px'}} tabIndex={0}>
									<div className={'person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'}>
										<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound'} style={{lineHeight: '40px', width: '40px', height: '40px'}}>
											<picture className={'ws-flexbox person-Wrapper__picture'}>
												<img loading={'lazy'} src={getUserImgUrl(sortedUsers[t.author_id])} className={'person-DefaultPhoto__image'} alt={''} />
											</picture>
											<div style={{width: '40px'}}>&nbsp;</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={' controls-Grid__row-cell controls-Grid__cell_default js-controls-Grid__row-cell controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__cell_fit  controls-hover-background-default controls-Grid__row-cell-background-hover-default  js-controls-ListView__measurableContainer'} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
				<div className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingRight_null controls-Grid__row-cell_rowSpacingTop_s controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__row-cell__content_hiddenForLadder controls-background-default-sticky controls-Grid__row-cell__content_ladderHeader controls-Grid__item_background-hover_undefined controls-hover-background-default  js-controls-ListView__notEditable controls-Grid__row-cell__content_baseline_L edws-MainColumn__photo_wrapper'} data-qa={'cell_content'} tabIndex={0}>
					<div className={'edws-MainColumn__photo ws-flex-grow-0 ws-flex-shrink-0'} tabIndex={0}>
						<div className={'person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default controls-Grid__row-cell__ladder-content'} style={{width: '40px', height: '40px'}}>
							<div className={'person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'}>
								<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound'} style={{lineHeight: '40px', width: '40px', height: '40px'}}>
									<picture className={'ws-flexbox person-Wrapper__picture'}>
										<img loading={'lazy'} src={getUserImgUrl(sortedUsers[t.author_id])} className={'person-DefaultPhoto__image'} alt={''} />
									</picture>
									<div style={{width: '40px'}}>&nbsp;</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={' controls-Grid__row-cell controls-Grid__cell_default js-controls-Grid__row-cell controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__columnSeparator_size-null controls-Grid__cell_fit  controls-hover-background-default controls-Grid__row-cell-background-hover-default  js-controls-ListView__measurableContainer'} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
				<div className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingLeft_m controls-Grid__cell_spacingRight controls-Grid__row-cell_rowSpacingTop_s controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__row-cell__content_ladderHeader controls-Grid__item_background-hover_undefined controls-hover-background-default  js-controls-ListView__notEditable controls-Grid__row-cell__content_baseline_L'} data-qa={'cell_content'} tabIndex={0}>
					<div className={'edws-MainColumn ws-ellipsis ws-flexbox'} tabIndex={0}>
						<div className={'edws-MainColumn__info ws-flex-grow-0 ws-flex-shrink-1'}>
							<div className={'edws-MainColumn__firstLine ws-flexbox ws-justify-content-between'} tabIndex={0}>
								<div className={'edws-MainColumn__firstLine-userInfo ws-flexbox ws-flex-grow-1'}>
									<span title={sortedUsers[t.author_id].name} className={'edws-MainColumn__userName ws-flex-shrink-0 ws-flex-grow-0 ws-ellipsis'} tabIndex={0}>{sortedUsers[t.author_id].name}</span>
									<span title={sortedGroups[sortedUsers[t.author_id].user_group].name} className={'edws-MainColumn__userDept ws-flex-shrink-1 ws-flex-grow-1 ws-ellipsis'} tabIndex={0}>{sortedGroups[sortedUsers[t.author_id].user_group].name}</span>
								</div>
							</div>
							<div className={'edws-MainColumn__ruleContainer ws-ellipsis'} tabIndex={0}>
								<span className={'edws-MainColumn__description-only edws-MainColumn__description ws-ellipsis'} title={Parser(t.opis)}>{Parser(t.opis)}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={' controls-Grid__row-cell controls-Grid__cell_default js-controls-Grid__row-cell controls-Grid__row-cell_default controls-Grid__row-cell_relative controls-Grid__row-cell_default_min_height controls-Grid__no-rowSeparator controls-Grid__row-cell_withRowSeparator_size-null controls-Grid__columnSeparator_size-null controls-Grid__cell_fit  controls-hover-background-default controls-Grid__row-cell-background-hover-default  js-controls-ListView__measurableContainer controls-Grid__row-cell__last-default controls-Grid__row-cell_selected controls-Grid__row-cell_selected-default controls-Grid__row-cell_selected__last controls-Grid__row-cell_selected__last-default'} data-qa={'cell'} colSpan={'1'} rowSpan={'1'}>
				<div className={'controls-Grid__row-cell__content js-controls-ListView__editingTarget controls-Grid__row-cell__content_baseline_default controls-Grid__row-cell_cursor-pointer controls-Grid__cell_spacingLeft controls-Grid__cell_spacingLastCol_default controls-Grid__row-cell_rowSpacingTop_s controls-Grid__row-cell_rowSpacingBottom_default controls-Grid__row-cell_withoutRowSeparator_size-null controls-Grid__row-cell__content_ladderHeader controls-Grid__item_background-hover_undefined controls-hover-background-default '} data-qa={'cell_content'} tabIndex={0}>
					<div className={'edws-StateWithDate__content'} tabIndex={0}>
						<div className={'ws-flexbox ws-justify-content-between'}>
							<div className={'edo3-Browser-State edws-StateWithDate__content-marks'} style={{width: '110px'}} tabIndex={0}>
								{!!false ? <div className={'edo3-Browser-State__wrapper edo3-Browser__relative-wrapper  edo3-Browser-State--fixed-height'}>
									<div className={'edo3-Browser-State__main-states edo3-Browser-State__flex-one edo3-Browser__text-base-line edo3-Browser__first-base-line ws-flexbox'}>
										<div className={'edo3-Browser-State__icon edo3-Browser-State__inner-state icon-16 icon-Successful controls-icon_style-success'} title={'Обработка завершена положительно'} tabIndex={0} />
									</div>
								</div> : ''}
							</div>
							<div className={'edws-StateWithDate__empty'} />
							<div className={'edws-BaseRegistry__date ws-flex-shrink-0 edws-StateWithDate__content-date'} title={'Получено в ' + formatDate(t.createDate)}>{formatDate(t.createDate)}</div>
						</div>
						<div className={'edo3-Browser-Responsible edws-StateWithDate__content-state'} tabIndex={0}>
							<div className={'ws-flexbox ws-flex-row ws-align-items-baseline edo3-Browser__active-phase-text ws-justify-content-end'} tabIndex={0}>
								<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_hoverIcon controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none controls-notFocusOnEnter edo3-Browser__active-phase  edo3-Browser__active-phase_text-color- ws-ellipsis'} title={'Status'} tabIndex={0}>
									<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-none'}>
										<span className={'controls-BaseButton__text controls-text-link controls-Button__text-link_viewMode-link controls-Button__text_viewMode-link'} tabIndex={0}>Status</span>
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className={'controls-itemActionsV js-controls-ListView__visible-on-hoverFreeze controls-itemActionsV_style_default  controls-itemActionsV_position_bottomRight controls-itemActionsV_padding-bottom_default  controls-itemActionsV_inside'}>
					<div className={'controls-itemActionsV__wrapper'}>
						<div className={'controls-itemActionsV__action js-controls-ItemActions__ItemAction controls-itemActionsV__action_style_secondary controls-itemActionsV__action_iconSize_m'} data-qa={'controls-itemActions__action null'} tabIndex={-1}>
							<span className={'controls-BaseButton controls-Button_link controls-Button_radius-link controls-Button_clickable controls-Button_link_style-secondary controls-Button_bg-same controls-fontsize-m controls-Button_link__wrapper-fontsize-m controls-Button_link_shadow-none undefined'}>
								<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-link controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center'}>
									<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-secondary controls-icon icon-SettingsNew'} tabIndex={0} />
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}