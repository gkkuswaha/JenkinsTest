const axios = require("axios");
import apiUrl from '@test/testdata/ApiUrls.json';

class GetRequest {
    /*
     * Method is to get the Onkanale Tray cards.
     * @return TrayCards
     */
    async getOnkanaleTrayCards(blockNumber: number) {
        try {
            const res = await axios.get(apiUrl.TabUrlapi.onKanale);
            const TRayCards = [];
            const innerBlockLength = res.data.pageProps.page.blocks[blockNumber].innerBlocks.length;
            for (let i = 0; i < innerBlockLength; i++) {
                let TRayCard: string;
                TRayCard = res.data.pageProps.page.blocks[blockNumber].innerBlocks[i].attrs.heading_two;
                TRayCards.push(TRayCard.trim());
            }
            return TRayCards;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    }
}
export default new GetRequest();
