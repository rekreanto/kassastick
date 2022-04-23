// NAMESPACES
$  = {};
$1 = {};
$2 = {};
$.syntax = {};


// CONTEXT

// Context( <obj props>, <obj context> )
const Context = ( props, ctx ) => Object.assign( {}, ctx, props );


// SYNTAX

// well-behaved split; 
// + trims off leading and trailing white-space
// + empty input string returns empty array
const trimsplit = ( re, str ) => {
  str = str.trim();
  if( !str ) return [];
  return str.split( re );
};


$.syntax.head2fn = Match
  ( _Function, fn => fn
  , /^<([^>]+)>/ , argstr => $2.tag( ...trimsplit( /\s+/, argstr ) )
  , /^\.(.+)$/   , cls => $1.class( cls )
  , /^\.$/       , _ =>   $1.class   
  , /^%(\S+)$/   , key => $2.data( key )
  , /^!(\S+)$/   , eventName => $2.bind( eventName )
  , /^@(\S+)$/   , attrName => $2.attr( attrName )
  )
;

// tag expression from syntax
$.syntax.texp2fn = Match
  ( _Function , fn => fn
  , _String   , str => $1.textnode( str )
  , _Number   , n   => $1.textnode( n.toString() )
  , _Array    , ([ head, ...args ]) =>
                  $.syntax.head2fn( head )( ...args )
  )
;

// METATAGS

$1.textnode = 
  ( ...strs ) =>
  ( ctx ) => {
// ENTRY
  const node = document.createTextNode( strs.join( '' ) );
  ctx.node.appendChild( node );
// EXIT
if( ctx.exits ) 
  ctx.exits.push
    ( () => { ctx.node.removeChild( node ) } 
    );
};

$2.tag = 
  ( tagname, role, nickname )   =>
  ( ...texps ) => // syntactic tag expressions
  ( ctx )      => 
{
// CREATE tag
  const node = document.createElement( tagname );
  ctx.node.appendChild( node );
// maybe PROCESS role
  if( role && ctx.env ){
    ctx.env[ role ] = node;
    node.classList.add( role );
  }

// maybe PROCESS nickname
  if( nickname ) node.style.gridArea = nickname;
// PROJECT context for descendants
  const ctx_ = Context( { node }, ctx );
// PROCESS descendants
  for( let texp of texps )
    $.syntax.texp2fn( texp )( ctx_ );
// maybe STORE exit action
  if( ctx.exits ) ctx.exits.push
    ( () => { node.parentNode.removeChild( node ) } 
    );
};

$2.each = xs => val2texp => ctx =>
{
  for( let x of xs ) 
    $.syntax.texp2fn( val2texp( x ) )( ctx );
};

$1.class = 
  ( classname ) =>
  ( ctx ) => 
{
// SET class
  ctx.node.classList.add( classname );
// STORE exit action
  if( ctx.exits ) ctx.exits.push
    ( () => { ctx.node.classList.remove( classname ) }
    )
  ; 
};

$2.data =
  ( k )    =>
  ( v )    =>
  ( ctx )  => 
{
// ENTRY
  ctx.node.dataset[ k ] = v;
// EXIT
  if ( ctx.exits ) ctx.exits.push
    ( () => delete ctx.dataset[ k ]
    )
  ;
};

$2.bind = eventName => handler => ctx =>
{ 
  const handler_ = ev => {
    const ret = handler( ev );
    if( ret ) $.syntax.texp2fn( ret )( ctx );
  }
  ctx.node.addEventListener( eventName, handler_ );
  if( ctx.exits ) ctx.exits.push
    ( () => ctx.node.removeEventListener( eventName, handler )
    )
  ;
}

$2.if = bool => texp => ctx => 
{
  if( bool ) 
    $.syntax.texp2fn( texp )( ctx );
}

$1.log = ( ...xs ) => ctx => {
  console.log( ...xs );
}

$2.attr = k => v => ctx => 
{
// ENTRY
  ctx.node[ k ] = v;
// EXIT
  if ( ctx.exits ) ctx.exits.push
    ( () => ctx.node.removeAttribute( k ) 
    )
  ;
};

$1.run = f => ctx => f( ctx );