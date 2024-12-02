import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const campaigns = [
  {
    AdCampaignName: "Muffato [uso em testes] - não editar",
    Public_Oid: "1a8J3B9z7C9z",
  },
  {
    AdCampaignName: "[SYNC] - TZ/Keys Tester - Não Editarr",
    Public_Oid: "9z8J4c4c3B",
  },
];

export default function SelectCampaing() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a campaign" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Campaigns</SelectLabel>
          {campaigns.map((campaign) => (
            <SelectItem key={campaign.Public_Oid} value={campaign.Public_Oid}>
              {campaign.AdCampaignName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
