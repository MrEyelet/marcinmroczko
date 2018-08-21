/*
Error: File to import not found or unreadable: ../partials/style.
        on line 1 of style.sass

1: @import '../partials/style'
2: 
3: #myVideo,
4: .hero
5: 	min-width: 100%
6: 	min-height: 100vh

Backtrace:
style.sass:1
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/import_node.rb:67:in `rescue in import'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/import_node.rb:44:in `import'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/import_node.rb:28:in `imported_file'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/import_node.rb:37:in `css_import?'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/perform.rb:314:in `visit_import'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/base.rb:36:in `visit'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/perform.rb:162:in `block in visit'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/stack.rb:79:in `block in with_base'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/stack.rb:135:in `with_frame'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/stack.rb:79:in `with_base'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/perform.rb:162:in `visit'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/base.rb:52:in `block in visit_children'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/base.rb:52:in `map'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/base.rb:52:in `visit_children'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/perform.rb:171:in `block in visit_children'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/perform.rb:183:in `with_environment'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/perform.rb:170:in `visit_children'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/base.rb:36:in `block in visit'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/perform.rb:190:in `visit_root'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/base.rb:36:in `visit'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/perform.rb:161:in `visit'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/visitors/perform.rb:10:in `visit'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/root_node.rb:36:in `css_tree'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/tree/root_node.rb:29:in `render_with_sourcemap'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/engine.rb:389:in `_render_with_sourcemap'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/engine.rb:307:in `render_with_sourcemap'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/plugin/compiler.rb:462:in `update_stylesheet'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/plugin/compiler.rb:215:in `block in update_stylesheets'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/plugin/compiler.rb:209:in `each'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/plugin/compiler.rb:209:in `update_stylesheets'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/plugin/compiler.rb:294:in `watch'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/plugin.rb:109:in `method_missing'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/exec/sass_scss.rb:360:in `watch_or_update'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/exec/sass_scss.rb:51:in `process_result'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/exec/base.rb:52:in `parse'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/lib/sass/exec/base.rb:19:in `parse!'
C:/Ruby24/lib/ruby/gems/2.4.0/gems/sass-3.5.5/bin/sass:13:in `<top (required)>'
C:/Ruby24/bin/sass:23:in `load'
C:/Ruby24/bin/sass:23:in `<main>'
*/
body:before {
  white-space: pre;
  font-family: monospace;
  content: "Error: File to import not found or unreadable: ../partials/style.\A         on line 1 of style.sass\A \A 1: @import '../partials/style'\A 2: \A 3: #myVideo,\A 4: .hero\A 5: 	min-width: 100%\A 6: 	min-height: 100vh"; }
