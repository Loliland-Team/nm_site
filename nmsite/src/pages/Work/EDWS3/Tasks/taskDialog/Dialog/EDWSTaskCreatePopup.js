import { getUserImgUrl } from '../../../../../../utils/Request.js';


export function EDWSTaskCreatePopup(props) {
	let p = props.page,
		s = props.store

	return (
		<div className={'controls_popupTemplate_theme-default controls-Stack__content-wrapper ws-workspace-width-700 controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
			<div className={'controls-ResizingLine controls_dragnDrop_theme-default controls-Stack__resizingLine'} data-qa={'controls-ResizingLine'} tabIndex={0}>
				<div className={'controls-ResizingLine__wrapper'}>
					<div className={'controls-ResizingLine__areaWrapper controls-ResizingLine__areaWrapper_horizontal controls-ResizingLine__areaWrapper_horizontal_direction-reverse'} />
					<div className={'controls-ResizingLine__border controls-ResizingLine__border_horizontal'} tabIndex={0} />
				</div>
			</div>
			<div className={'edo3-Dialog__formController edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1 edws3-usualCard controls-Stack__content controls-hint-area'} tabIndex={0}>
				<div className={'edo3-Dialog'} tabIndex={0}>
					<div className={'controls_popupTemplate_theme-default controls-StackTemplate controls-StackTemplate__with-right-panel edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1'} tabIndex={0}>
						<div className={'controls-StackTemplate-shadow__container  controls-StackTemplate-shadow_direction-right__container'}>
							<div className={'controls-StackTemplate-shadow controls-StackTemplate-shadow_direction-right'}>
								<div className={'controls-StackTemplate-shadow__content'} />
							</div>
						</div>
						<div className={'controls-StackTemplate-content_wrapper controls-StackTemplate_backgroundColor'} tabIndex={0}>
							<div className={'controls-StackTemplate__rightPanel controls-StackTemplate__rightPanel-outside controls-StackTemplate__rightBorder_visible'} tabIndex={0}></div>
							<div className={'controls-StackTemplate-content'}>
								<div className={'controls-StackTemplate__top-area  controls-StackTemplate_headerBackgroundColor'} tabIndex={0}></div>
								<div className={'controls-StackTemplate__content-area controls-StackTemplate_backgroundColor'}>
									<div className={'edo3-Dialog__bodyContent edo3-Dialog__fullHeight ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 controls-background-stack'} tabIndex={0}>
										<div className={'controls-background-stackHeader controls-padding_left-m controls-padding_right-m'} tabIndex={0} />
										<div className={'edo3-Dialog__head-crumbs edo3-Dialog__head-item ws-flex-shrink-0 controls-background-stackHeader'} tabIndex={0} />
										<div className={'edo3-DialogLayout ws-flexbox ws-flex-column ws-flex-grow-1 ws-flex-shrink-1 edo3-Dialog__layout controls-background-stack'} tabIndex={1100}>
											<div className={'controls-Tabs controls-Tabs__horizontal  controls-Tabs_inlineHeight-s edo3-DialogLayout-tabs controls-background-stackHeader ws-flex-shrink-0'} tabIndex={-1} name={'container'}></div>
											<div className={'controls-LoadingIndicator controls-SwitchableArea ws-flex-grow-1 edo3-Dialog__fullHeight edo3-DialogLayout__relativeContainer controls-background-stack ws-flexbox ws-flex-grow-1 ws-flex-shrink-1'} tabIndex={2}>
												<div className={'edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-align-self-stretch .edo3-Dialog__drag-and-drop-area--69341'} tabIndex={3}>
													<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default edo3-Dialog__fullHeight ws-flexbox ws-flex-grow-1 ws-flex-shrink-1'} tabIndex={0}>
														<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} readOnly={''} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
															<div name={'userContent'} className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
																<div className={'edws-TaskDialog__AttachButtonDropAreaWrapper ws-flexbox ws-flex-grow-1 edo3-Dialog__fullHeight controls-Scroll-containerBase_userContent'} tabIndex={0}>
																	<div data-element={'DropArea'} id={'DropArea__ee6a3654-17ee-489e-9354-35b4d7621cf1'} className={'DropArea__container docview3-drop-area'} tabIndex={0}>
																		<div id={'DropArea__overlaidElement__ee6a3654-17ee-489e-9354-35b4d7621cf1'} className={'DropArea__overlaidElement'}>
																			<div name={'mainTabContainer'} className={'edws-TaskDialog__mainTab ws-flexbox ws-flex-column ws-flex-grow-1'} tabIndex={0}>
																				<div tabIndex={0} />
																				<div name={'mainInfoContainer'} className={'edws-TaskDialog__mainTab-mainInfoContainer'}>
																					<div tabIndex={1} name={'mainInformationTab'} className={'edws-TaskDialog__mainTab-mainInfo ws-flexbox ws-flex-column edws-boot'}>
																						<div name={'mainHead'} className={'ws-flexbox ws-justify-content-end ws-align-items-start edws-TaskDialog__mainTab-head'}>
																							<div className={'ws-flexbox edws-minWidth-0 ws-flex-column'}>
																								<div className={'edo3-Sticker ws-flexbox edo3-Sticker--withPhoto edo3-Sticker--photo-right ws-flex-grow-0 ws-flex-shrink-0 ws-align-self-end taskSticker'} tabIndex={-1}>
																									<div className={'edo3-Sticker__main-flexContainer controls-fontsize-m ws-flexbox ws-flex-column ws-align-items-end'}>
																										<div className={'edo3-Sticker__mainRow-container ws-flexbox ws-flex-row'}>
																											<div data-qa={'edo3-Sticker__mainInfo'} title={s.user_info.name} className={'edo3-Sticker__mainRow controls-fontsize-xs controls-inlineheight-xs ws-ellipsis ws-flex-shrink-1  edo3-Sticker__active controls-text-secondary'}>{s.user_info.name}</div>
																										</div>
																										<div title={s.sortedGroups[s.user_info.user_group].name} className={'edo3-Sticker__additionalRow controls-text-label controls-fontsize-xs ws-ellipsis'}>{s.sortedGroups[s.user_info.user_group].name}</div>
																									</div>
																									<div className={'person-Collage__grid person-Collage__grid_size-one ws-flex-shrink-0 person-Wrapper__container undefined controls-image_border-large controls_Person_theme-default edo3-Sticker__photo'} tabIndex={0} style={{width: '32px', height: '32px'}}>
																										<div className={'person-Collage__grid_cell person-Collage__grid_cell_rows-2 ws-flexbox ws-align-items-center ws-justify-content-center'}>
																											<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined person-Wrapper__image_noRound controls-PopupPreviewer person-Wrapper__clickable'} tabIndex={0} style={{lineHeight: '32px', height: '32px', width: '32px'}}>
																												<picture className={'ws-flexbox person-Wrapper__picture'}>
																													<img alt={''} loading={'lazy'} src={getUserImgUrl(s.user_info)} className={'person-DefaultPhoto__image'} />
																												</picture>
																												<div style={{width: '32px'}}>&nbsp;</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																						<div></div>
																						<div></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}