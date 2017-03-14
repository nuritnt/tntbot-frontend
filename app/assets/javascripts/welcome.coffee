# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

# Vendor prefixes for the 'AnimationEnd' event listener
$ ->
  pfx = [
    'webkit'
    'moz'
    'MS'
    'o'
    ''
  ]

  prefixedEventListener = (element, type, callback) ->
    p = 0
    while p < pfx.length
      if !pfx[p]
        type = type.toLowerCase()
      element.addEventListener pfx[p] + type, callback, false
      p++
    return

  # filter methods
  input = document.querySelector('.js-filter-search-box')
  ul = document.getElementById('link-list')
  li = ul.getElementsByClassName('js-filter-item')

  input.addEventListener 'keyup', (event) ->
    string = input.value
    Array.from(li).filter((item) ->
      if item.dataset.name.search(new RegExp(string, 'i')) != -1
        item.classList.remove('hidden')
        item.classList.remove('none')
      else
        item.classList.add('hidden')
        prefixedEventListener item, 'AnimationEnd', (e) ->
          item.classList.add('none')
          return

    ).forEach (item) ->
      return
