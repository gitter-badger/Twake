import { Channel, ChannelMember, ChannelTab } from "../entities";

export declare type DirectChannel = "direct";

export interface BaseChannelsParameters {
  company_id: string;
  workspace_id: string | DirectChannel;
}

export interface ChannelParameters extends BaseChannelsParameters {
  /** the channel id */
  id: string;
}

export interface ChannelMemberParameters extends ChannelParameters {
  member_id: string;
}

export interface PaginationQueryParameters {
  page_token?: string;
  limit?: string;
  websockets?: boolean;
}

export interface ChannelListQueryParameters extends PaginationQueryParameters {
  search_query?: string;
  mine?: boolean;
}

export class CreateChannelBody {
  options?: ChannelCreateOptions;
  resource: ChannelCreateResource;
}

export class ChannelCreateOptions {
  /**
   * Members to add to channel in case of direct channel
   */
  members?: string[];
}

export type ChannelSaveOptions = ChannelCreateOptions & {
  /**
   * Add the channel creator as member.
   */
  addCreatorAsMember?: boolean;
};

export class ChannelListOptions {
  channels?: string[];
  mine?: boolean;
}

export class UpdateChannelBody {
  resource: ChannelUpdateResource;
}

export class ReadChannelBody {
  value: boolean;
}

export type ChannelCreateResource = Pick<Channel, "name">;

export type ChannelUpdateResource = Pick<Channel, "name">;

// channel members

export class CreateChannelMemberBody {
  resource: Pick<ChannelMember, "user_id">;
}

export class UpdateChannelMemberBody {
  resource: Pick<ChannelMember, "favorite" | "notification_level">;
}

export type ChannelMemberSaveOptions = null;

// channel tabs

export interface ChannelTabParameters extends ChannelParameters {
  tab_id: string;
}

export class CreateChannelTabBody {
  resource: ChannelTab;
}

export class UpdateChannelTabBody {
  resource: ChannelTab;
}

export type ChannelTabSaveOptions = {
  resource: ChannelTab;
};
