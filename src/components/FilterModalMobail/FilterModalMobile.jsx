import { useDispatch, useSelector } from "react-redux"
import { Backdrop, BtnHeaderClouse, ClearFiltrBtn, Field, Label, MobFilterSection, MobFilterContainer, Range, Select, WrapFilter } from "./FilterModalMobile.styled"
import { getOpenModalFilter, getRangePrice, getSelectTastes } from "../../redux/filter/selectors"
import { clearFilter, selectedPriceRange, selectedTastes, toggleFilter } from "../../redux/filter/filtersSlice"

export const FilterModalMobile = () => {
    const isOpenFilter = useSelector(getOpenModalFilter)
    const dispatch = useDispatch()

    const getTastes = useSelector(getSelectTastes)
    const valuePriceRange = useSelector(getRangePrice);
    const handleToggleModal = () => {
        dispatch(toggleFilter(!isOpenFilter))
    };
    return (
        <>
            <Backdrop open={isOpenFilter} onClick={handleToggleModal}>
                <MobFilterSection open={isOpenFilter} onClick={(e) => e.stopPropagation()}>
                    <MobFilterContainer>
                        <BtnHeaderClouse type="button" onClick={handleToggleModal}>
                            x
                        </BtnHeaderClouse>
                        <WrapFilter>
                            <Field>
                                <Label>Сортування за смаком</Label>
                                <Select
                                    onChange={(e) => dispatch(selectedTastes(e.target.value))}
                                    value={getTastes}
                                >
                                    <option defaultValue="За замовчуванням">За замовчуванням</option>
                                    <option value="шоколад">шоколад</option>
                                    <option value="полуниця">полуниця</option>
                                    <option value="чорниця">чорниця</option>
                                    <option value="малина">малина</option>
                                    <option value="лимон">лимон</option>
                                    <option value="фісташка">фісташка</option>
                                    <option value="ваніль + какао">ваніль + какао</option>
                                    <option value="ваніль">ваніль</option>
                                    <option value="шоколад + ваніль">шоколад + ваніль</option>
                                    <option value="ваніль-шоколад">ваніль-шоколад</option>
                                    <option value="карамель">карамель</option>
                                    <option value="шоколад-полуниця">шоколад-полуниця</option>
                                    <option value="ред велвет">ред велвет</option>
                                    <option value="лаванда-ваніль">лаванда-ваніль</option>
                                    <option value="апельсин">апельсин</option>
                                    <option value="мед">мед</option>
                                    <option value="манго">манго</option>
                                    <option value="рубіновий шоколад">рубіновий шоколад</option>
                                    <option value="ваніль, кава">ваніль, кава</option>
                                    <option value="ягоди">ягоди</option>
                                    <option value="персик, чорниця">персик, чорниця</option>
                                    <option value="манго, малина">манго, малина</option>
                                    <option value="смородина">смородина</option>
                                    <option value="полуниця, фісташка">полуниця, фісташка</option>
                                    <option value="полуниця, білий шоколад">
                                        полуниця, білий шоколад
                                    </option>
                                    <option value="полуниця, шоколад">полуниця, шоколад</option>
                                    <option value="малина, чорниця">малина, чорниця</option>
                                </Select>
                            </Field>

                            <Field>
                                <Label>
                                    Діапазон цін десертів: {valuePriceRange} грн
                                    <Range
                                        type="range"
                                        name="filterPrice"
                                        value={valuePriceRange}
                                        onChange={(e) => dispatch(selectedPriceRange(e.target.value))}
                                        min="0"
                                        max="2000"
                                        actual={((Number(valuePriceRange) - 0) * 100) / (2000 - 0)}
                                    />
                                </Label>
                            </Field>
                            <ClearFiltrBtn type="button" onClick={(e) => dispatch(clearFilter())}>Скинути фільтри</ClearFiltrBtn>
                        </WrapFilter>

                    </MobFilterContainer>
                </MobFilterSection>
            </Backdrop>
        </>

    )
}