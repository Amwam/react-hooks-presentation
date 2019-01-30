export interface DefaultsState {
  tagId: number | void;
  showRecentPhotos: true | false;
}

export interface SearchState {
  defaults: DefaultsState;
  tickedArtists: { [artistId: number]: boolean };
}

// Reducer
function defaults(
  state: DefaultsState = { tagId: undefined, showRecentPhotos: false },
  action: { type: string },
) {
  return state;
}

// In the component file
function mapStateToProps(state: { search_beta: SearchState }) {
  return {
    selectedSlot: state.search_beta.defaults.tagId || null,

    showRecentPhotos: state.search_beta.defaults.showRecentPhotos,
  };
}
