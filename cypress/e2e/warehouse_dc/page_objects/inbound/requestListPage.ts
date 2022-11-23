import CoreRequestListPage from "../../../warehouse_core/page_objects/inbound/requestListPage";

export default class RequestListPage extends CoreRequestListPage {}

const searchbox =
  'input[placeholder="No. Barang Masuk atau No. Permintaan Barang"]';

export function getSearcbox() {
  return searchbox;
}
