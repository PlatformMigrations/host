"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const campaigns = [
  {
    AdCampaignName: "Muffato [uso em testes] - não editar",
    Public_Oid: "1a8J3B9z7C9z",
  },
  {
    AdCampaignName: "[SYNC] - TZ/Keys Tester - Não Editarr",
    Public_Oid: "9z8J4c4c3B",
  },
  {
    AdCampaignName: "New Campaign",
    Public_Oid: "1a8J5C1a3B1a"
  },
  {
    AdCampaignName: "New Campaign Kauan",
    Public_Oid: "1a8J5C1a1a3B"
  },
  {
    AdCampaignName: "thiagoUpload",
    Public_Oid: "1a8J5C0A9z5C"
  },
];

export default function ComboboxCampaing() {
  const [open, setOpen] = React.useState(false);
  const [selectedCampaign, setSelectedCampaign] = React.useState<string>("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[280px] justify-between"
        >
          {selectedCampaign
            ? campaigns.find((campaign) => campaign.Public_Oid === selectedCampaign)
              ?.AdCampaignName
            : "Select a campaign"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0">
        <Command>
          <CommandInput placeholder="Search campaign..." className="h-9" />
          <CommandList>
            <CommandEmpty>No campaigns found.</CommandEmpty>
            <CommandGroup>
              {campaigns.map((campaign) => (
                <CommandItem
                  key={campaign.Public_Oid}
                  value={campaign.AdCampaignName}
                  onSelect={(currentValue) => {
                    setSelectedCampaign(
                      currentValue === selectedCampaign ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  {campaign.AdCampaignName}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedCampaign === campaign.AdCampaignName
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
