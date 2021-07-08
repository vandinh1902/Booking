import {
  AVOID_BOOKED_SEAT,
  BOOKING_SEAT,
  FETCH_LAY_DANH_SACH_PHONG_VE_FAILED,
  FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS,
  FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS,
  BUYING_COMBO,
  CLEAN_UP_REDUCER_PHONG_VE,
} from "./constants";
import { combos } from "./../../Combo/ComboType/dataCombo";

const initialState = {
  infoPhongVe: null,
  isLoading: false,
  err: null,
  bookingSeat: [],
  bookedSeat: [],
  combosData: combos,
  totalPrice: 0,
  totalPriceSeat: 0,
  totalPriceCombo: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LAY_DANH_SACH_PHONG_VE_REQUESTS:
      state.isLoading = true;
      return { ...state };

    case FETCH_LAY_DANH_SACH_PHONG_VE_SUCCESS:
      state.isLoading = false;
      state.infoPhongVe = payload;
      let booked = state.infoPhongVe.danhSachGhe.filter((bookedSeat) => {
        return bookedSeat.daDat === true;
      });
      state.bookedSeat = booked;
      return { ...state };

    case FETCH_LAY_DANH_SACH_PHONG_VE_FAILED:
      state.isLoading = false;
      state.err = payload;
      return { ...state };

    case CLEAN_UP_REDUCER_PHONG_VE:
      state.infoPhongVe = null;
      state.isLoading = false;
      state.err = null;
      state.bookingSeat = [];
      state.combosData = combos;
      state.totalPrice = 0;
      state.totalPriceSeat = 0;
      state.totalPriceCombo = 0;
      return { ...state };

    case BOOKING_SEAT: {
      const newBookingSeat = [...state.bookingSeat];
      if (payload.daDat) return { ...state };
      const index = newBookingSeat.findIndex((bookedSeat) => {
        return bookedSeat.maGhe === payload.maGhe;
      });
      if (index !== -1) {
        newBookingSeat.splice(index, 1);
      } else {
        newBookingSeat.push(payload);
      }
      state.bookingSeat = newBookingSeat;
      const totalSeat = state.bookingSeat.reduce((total, cur, index) => {
        return (total += cur.giaVe);
      }, 0);
      state.totalPriceSeat = totalSeat;
      state.totalPrice = state.totalPriceCombo + state.totalPriceSeat;
      return { ...state };
    }

    case BUYING_COMBO: {
      const { combo, isAddMinus } = payload;
      const arrCombosData = [...state.combosData];
      const index = arrCombosData.findIndex((comboData) => {
        return comboData.ten === combo.ten;
      });
      if (isAddMinus > 0) {
        arrCombosData[index].quantity += 1;
      } else {
        if (arrCombosData[index].quantity > 0) {
          arrCombosData[index].quantity -= 1;
        } else {
          arrCombosData[index].quantity = 0;
        }
      }
      state.combosData = arrCombosData;
      const totalCombos = state.combosData.reduce((total, cur, index) => {
        return (total += cur.gia * cur.quantity);
      }, 0);
      state.totalPriceCombo = totalCombos;
      state.totalPrice = state.totalPriceCombo + state.totalPriceSeat;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
