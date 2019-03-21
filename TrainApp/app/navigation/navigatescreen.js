import NavigationService from './navigationservice'

export default (screen) => (e) => {
  NavigationService.navigate(screen)
}